
import { menusList } from "@/config/menus"
import NavLink from "./NavLink"
import MenuMobile from "./menu-mobile"

function Navbar(props) {

    const menuList = menusList.map((menu) => <NavLink key={menu.name} {...menu} />)
    return (
        <div className="flex w-full inset-x-0 top-0  justify-between py-2 px-4">
            <div >logo</div>

            <div className="flex gap-4">
                <MenuMobile >
                    {menuList}
                </MenuMobile>
            </div>
        </div>
    )
}

export default Navbar
