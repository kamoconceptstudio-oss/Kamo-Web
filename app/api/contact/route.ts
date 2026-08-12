import { NextResponse } from "next/server";
import { Resend } from "resend";

// PLACEHOLDER: destino y remitente por defecto hasta que el dominio de
// produccion y la cuenta de Resend esten configurados con datos reales
// (ver .env.example). "onboarding@resend.dev" es el remitente de pruebas
// que ofrece Resend sin necesidad de verificar un dominio propio.
const DEFAULT_TO = "contacto@kamoconcept.com";
const DEFAULT_FROM = "Kamo Concept <onboarding@resend.dev>";

const MAX_LENGTHS = { name: 100, email: 200, phone: 30, message: 2000 };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  company?: unknown;
}

function validate(data: ContactPayload): string | null {
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (name.length < 2 || name.length > MAX_LENGTHS.name) {
    return "El nombre no es válido.";
  }
  if (!EMAIL_REGEX.test(email) || email.length > MAX_LENGTHS.email) {
    return "El email no es válido.";
  }
  if (phone.length > MAX_LENGTHS.phone) {
    return "El teléfono no es válido.";
  }
  if (message.length < 10 || message.length > MAX_LENGTHS.message) {
    return "El mensaje debe tener entre 10 y 2000 caracteres.";
  }
  return null;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: si un bot ha rellenado este campo oculto, respondemos como si
  // hubiera ido bien sin enviar nada de verdad ni revelar que fue detectado.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const name = (body.name as string).trim();
  const email = (body.email as string).trim();
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = (body.message as string).trim();

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "El servicio de contacto no está configurado todavía." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_EMAIL_TO || DEFAULT_TO;
  const from = process.env.CONTACT_EMAIL_FROM || DEFAULT_FROM;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nueva consulta de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "-"}\n\nMensaje:\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 502 }
    );
  }
}
