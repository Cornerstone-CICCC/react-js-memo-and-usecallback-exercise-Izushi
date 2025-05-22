import { useCallback, useState } from "react"
import FetchProductsButton from "./FetchProductsButton"

type Product = {
  id: number
  title: string
  price: number
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = useCallback(async () => {
      try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        console.log(data)
        setProducts(data.products)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }, [])

  return (
    <div>
      <h2>Product list</h2>
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          )
        })}
      </ul>
      <FetchProductsButton onFetch={fetchProducts} />
    </div>
  )
}

export default ProductList