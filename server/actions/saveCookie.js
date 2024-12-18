"use server"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function saveCookie(name) {
  const cookieStore = await cookies()
  const counter = parseInt(cookieStore.get("counter").value ?? 0) + 1
  cookieStore.set("nombre", name)
  cookieStore.set("counter", counter)
  revalidatePath("/productos/[idProducto]")
  return { success: true }
}
