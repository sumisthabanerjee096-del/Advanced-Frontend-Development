import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="layout__grid">
          <ProductList />
          <Cart />
        </div>
      </div>
    </>
  )
}

export default App
