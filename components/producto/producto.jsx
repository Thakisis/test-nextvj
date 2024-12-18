

async function Producto({ params }) {
    const idProducto = (await params).idProducto
    return (
        <div>
            producto {idProducto}
        </div>
    )
}

export default Producto
