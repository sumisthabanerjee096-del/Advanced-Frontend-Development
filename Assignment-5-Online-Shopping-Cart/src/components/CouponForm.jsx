import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import './CouponForm.css'

function CouponForm() {
  const { applyCoupon, clearCoupon, couponCode, discountPercent, couponError } = useCart()
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    applyCoupon(input)
  }

  return (
    <div className="coupon">
      {couponCode ? (
        <div className="coupon__applied">
          <span>"{couponCode}" applied — {discountPercent}% off</span>
          <button onClick={() => { clearCoupon(); setInput('') }}>Remove</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="coupon__form">
          <input
            placeholder="Coupon code (try SAVE10)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Apply</button>
        </form>
      )}
      {couponError && <p className="coupon__error">{couponError}</p>}
    </div>
  )
}

export default CouponForm
