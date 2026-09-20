import { useCart } from '../context/CartContext.jsx'
import './OrderSummary.css'

function formatINR(value) {
  return `₹${value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`
}

function OrderSummary() {
  const { subtotal, discountAmount, discountPercent, gst, grandTotal } = useCart()

  return (
    <div className="order-summary">
      <div className="order-summary__row">
        <span>Subtotal</span>
        <span>{formatINR(subtotal)}</span>
      </div>
      {discountPercent > 0 && (
        <div className="order-summary__row order-summary__row--discount">
          <span>Discount ({discountPercent}%)</span>
          <span>−{formatINR(discountAmount)}</span>
        </div>
      )}
      <div className="order-summary__row">
        <span>GST (18%)</span>
        <span>{formatINR(gst)}</span>
      </div>
      <div className="order-summary__row order-summary__row--total">
        <span>Grand Total</span>
        <span>{formatINR(grandTotal)}</span>
      </div>
    </div>
  )
}

export default OrderSummary
