import { memo } from "react"

type Props = {
  onFetch: () => void
}

const FetchProductsButton = memo((props: Props) => {
  console.log("Rendered Button Component")
  const { onFetch } = props
  return (
    <button onClick={onFetch}>Fetch Products</button>
  )
})

export default FetchProductsButton