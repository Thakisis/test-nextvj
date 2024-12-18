import { Suspense } from "react"
import Producto from "@/components/producto"
import ClientComponent from "@/components/ClientComponent"
import Link from "next/link"

import CookieComponent from "@/components/CookieComponent"

async function ProductPage({ params }) {
  return (
    <div>
      <h1>Product</h1>
      <div>compre esto productos</div>
      <Producto params={params} />
      <Link href='/productos/10'>al 10</Link>
      <ClientComponent />
      <div>-----</div>
      <Suspense fallback={<div>Loading...</div>}>
        <CookieComponent />
      </Suspense>
    </div>
  )
}

export default ProductPage
