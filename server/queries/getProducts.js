export default async function getProducts() {
  const resp = await fetch("https://fakestoreapi.com/products")
  const data = await resp.json()

  return data
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
