"use client"

import { useState } from "react";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      form.reset();
    } catch {
      setError("No se pudo enviar el mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contacto"
      className="min-h-screen relative px-6 py-40 bg-zinc-50"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white"
      />

      <div className="relative max-w-screen-xl mx-auto w-full grid gap-20 md:grid-cols-2 items-center">
        <div className="max-w-xl">
          <span className="mb-3 inline-block text-sm uppercase tracking-widest text-zinc-500">
            ¿Listo para dar el siguiente paso?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6">
            Cuéntanos sobre tu idea o proyecto.
          </h2>

          <p className="text-lg text-zinc-600 leading-relaxed">
            Analizamos cada propuesta con criterio y visión de negocio. Si tiene sentido, te proponemos el mejor camino para hacerlo realidad.
          </p>
        </div>

        <div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="grid gap-6">
              {/* Nombre */}
              <div>
                <label htmlFor="cta-name" className="mb-2 block text-sm font-medium text-zinc-700">
                  Nombre
                </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ingresa tu nombre"
                    className="
                      w-full rounded-xl
                      border border-zinc-300
                      bg-white px-4 py-3
                      text-zinc-900
                      placeholder:text-zinc-500
                      placeholder:opacity-100
                      focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900
                    "
                  />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="cta-email" className="mb-2 block text-sm font-medium text-zinc-700">
                  Correo electrónico
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  placeholder="nombre@ejemplo.com"
                  className="w-full rounded-xl
                      border border-zinc-300
                      bg-white px-4 py-3
                      text-zinc-900
                      placeholder:text-zinc-500
                      placeholder:opacity-100
                      focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900
                      "
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="cta-message" className="mb-2 block text-sm font-medium text-zinc-700">
                  Mensaje
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Cuéntanos sobre tus necesidades o inquietudes…"
                  className="w-full rounded-xl
                      border border-zinc-300
                      bg-white px-4 py-3
                      text-zinc-900
                      placeholder:text-zinc-500
                      placeholder:opacity-100
                      focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900
                      "
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-zinc-900 px-8 py-3 font-semibold text-white disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Enviar mensaje →"}
              </button>

              <p className="mt-2 text-center text-sm text-zinc-500">
                Normalmente respondemos en menos de 24 horas.
              </p>

              {success && (
                <p className="text-center text-sm text-emerald-600">
                  Mensaje enviado correctamente. ¡Gracias por contactarnos!
                </p>
              )}

              {error && (
                <p className="text-center text-sm text-red-600">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
