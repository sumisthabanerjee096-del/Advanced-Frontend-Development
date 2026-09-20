import { useCart } from '../context/CartContext.jsx'
import CartItem from './CartItem.jsx'
import CouponForm from './CouponForm.jsx'
import OrderSummary from './OrderSummary.jsx'
import './Cart.css'

function Cart() {
  const { items } = useCart()

  return (
    <aside className="cart">
      <h2 className="cart__title">Your Cart</h2>

      {items.length === 0 ? (
        <p className="cart__empty">Your cart is empty. Add a few products to get started.</p>
      ) : (
        <div className="cart__items">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}

      <CouponForm />
      <OrderSummary />
    </aside>
  )
}

export default Cart
