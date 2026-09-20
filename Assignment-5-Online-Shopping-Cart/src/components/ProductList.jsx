import products from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import './ProductList.css'

function ProductList() {
  const { addItem } = useCart()

  return (
    <section className="product-list">
      <h2 className="product-list__title">Products</h2>
      <div className="product-list__grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-card__image">{product.emoji}</div>
            <h3>{product.name}</h3>
            <p className="product-card__price">₹{product.price.toLocaleString('en-IN')}</p>
            <button onClick={() => addItem(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
