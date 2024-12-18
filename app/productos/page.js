import Productos from "@/components/productos"
import Link from "next/link"
import { Suspense } from "react"

function ProductosPage(props) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Productos />
      </Suspense>
    </div>
  )
}

export default ProductosPage
