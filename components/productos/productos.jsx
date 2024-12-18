import getProducts from "@/server/queries/getProducts"
import Link from "next/link"
async function Productos(props) {
    const products = await getProducts()

    const productoslist = products.map((producto) => <Link key={producto.id} href={`/productos/${producto.id}`}>{producto.title}</Link>)

    return (
        <div className="flex flex-col gap-1 ">

            {productoslist}
        </div>
    )
}

export default Productos
