import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// vercel.json no soporta condicionar redirects por "host" (solo
// header/cookie/query), y el redirect de dominio a dominio en Vercel es una
// funcion exclusiva del dashboard (Project Settings > Domains > Redirect
// to) sin equivalente en CLI. Lo resolvemos aqui para que quede versionado
// y no dependa de un ajuste manual en la plataforma.
export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === "kamoconcept.com") {
    const url = request.nextUrl.clone();
    url.host = "www.kamoconcept.com";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
