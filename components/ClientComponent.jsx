"use client"

import { useTransition, useState } from "react"
import { saveCookie } from "@/server/actions/saveCookie"




function ClientComponent(props) {

    const [isPending, startTransition] = useTransition()
    const [mychild, setMychild] = useState(null)
    const handleClick = () => {
        startTransition(async () => {
            const resp = await saveCookie("pepe")
            setMychild(resp.elem)
        })
    }


    return (
        <div className="flex flex-col gap-4">
            <div className="bg-red-500"></div>
            <button>name</button>
            <button onClick={handleClick}> {isPending ? "saving" : "Counter"}</button>
            {mychild}
        </div>
    )
}

export default ClientComponent
