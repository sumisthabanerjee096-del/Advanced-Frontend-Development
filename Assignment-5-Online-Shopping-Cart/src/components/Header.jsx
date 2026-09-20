import { useCart } from '../context/CartContext.jsx'
import './Header.css'

function Header() {
  const { itemCount } = useCart()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <h1 className="site-header__brand">Saaj</h1>
        <div className="site-header__cart-badge">
          🛒 <span>{itemCount}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
