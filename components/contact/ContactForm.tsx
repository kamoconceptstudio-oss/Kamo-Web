"use client";

import { FormEvent, useState } from "react";
import Button from "../ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-sm text-body text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 disabled:opacity-60";

const labelClasses = "mb-xs block text-small uppercase tracking-[0.15em] text-neutral-500";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: si un bot ha rellenado este campo, fingimos éxito sin
    // llegar a llamar a la API (ver también la comprobación en el servidor).
    if ((formData.get("company") as string)?.trim()) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrorMessage(
          data.error || "No se pudo enviar el mensaje. Inténtalo de nuevo."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(
        "No se pudo enviar el mensaje. Comprueba tu conexión e inténtalo de nuevo."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-neutral-200 bg-surface-warm p-lg text-center"
      >
        <p className="text-body text-neutral-900">
          Gracias por escribirnos. Te responderemos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-lg text-left">
      {/* Honeypot anti-spam: invisible y fuera del árbol de accesibilidad;
          un usuario real nunca lo rellena, un bot básico sí. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">No rellenar este campo</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className={labelClasses}>
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={100}
          disabled={status === "submitting"}
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          disabled={status === "submitting"}
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Teléfono <span className="text-neutral-400 normal-case tracking-normal">(opcional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={30}
          disabled={status === "submitting"}
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Cuéntanos tu proyecto
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={7}
          disabled={status === "submitting"}
          className={fieldClasses}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-small text-red-600">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="w-full px-xl py-sm text-h3"
      >
        {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}
