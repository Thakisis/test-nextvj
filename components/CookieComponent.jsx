import { cookies } from "next/headers"

async function CookieComponent(props) {
    const cookieStore = await cookies()
    const nombre = cookieStore.get("nombre").value
    const counter = cookieStore.get("counter").value
    console.log(nombre, counter)
    return (
        <div>
            cookieee:{nombre}-{counter}
        </div>
    )
}

export default CookieComponent
