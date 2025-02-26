import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Aquí puedes agregar la lógica para enviar el email o guardar en una base de datos
    console.log("Mensaje recibido:", body)

    return NextResponse.json({ message: "Mensaje enviado correctamente" })
  } catch (error) {
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}

