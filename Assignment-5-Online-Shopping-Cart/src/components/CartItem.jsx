import { useCart } from '../context/CartContext.jsx'
import './CartItem.css'

function CartItem({ item }) {
  const { updateQty, removeItem } = useCart()

  return (
    <div className="cart-item">
      <span className="cart-item__emoji">{item.emoji}</span>
      <div className="cart-item__info">
        <p className="cart-item__name">{item.name}</p>
        <p className="cart-item__price">₹{item.price.toLocaleString('en-IN')}</p>
      </div>
      <div className="cart-item__qty">
        <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
        <span>{item.qty}</span>
        <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
      </div>
      <button className="cart-item__remove" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
        ✕
      </button>
    </div>
  )
}

export default CartItem
