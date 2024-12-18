
import Link from "next/link"

function NavLink({ name, href, icon }) {

    return (
        <Link href={href}>{name}</Link>
    )
}

export default NavLink
