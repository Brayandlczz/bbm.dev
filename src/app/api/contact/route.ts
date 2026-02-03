import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Datos incompletos" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "BBM <contact@devbbm.com>",
      to: ["bbmsolutions.dev@gmail.com"],
      replyTo: email,
      subject: `Nuevo contacto — ${name || "Sin nombre"}`,
      html: `
        <h2>Nuevo mensaje desde devbbm.com</h2>
        <p><strong>Nombre:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error interno" },
      { status: 500 }
    );
  }
}
