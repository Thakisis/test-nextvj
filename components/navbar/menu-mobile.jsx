"use client"
import { Children, cloneElement } from "react"
import { usePathname } from "next/navigation"


function MenuMobile({ children }) {
    const pathname = usePathname()
    const childrens = Children.map(children, (child) => {
        return child.props.href !== pathname ? child : cloneElement(child, { className: "text-red-500" })

    })



    return (


        <div className="flex gap-4">
            {childrens}
        </div>


    )
}

export default MenuMobile
