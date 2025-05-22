import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import ProductList from './components/ProductList'

const App = () => {
  const [count, setCount] = useState(0)
  const firstName = 'John'
  const lastName = 'Doe'

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <Profile firstName={firstName} lastName={lastName} />
      <ProductList />
    </div>
  )
}

export default App