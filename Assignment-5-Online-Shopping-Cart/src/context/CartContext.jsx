import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

// Coupon codes and how much percentage they discount
const COUPONS = {
  SAVE10: 10,
  SAVE20: 20,
  WELCOME5: 5,
}

const GST_RATE = 0.18 // 18%

const initialState = {
  items: [],          // [{ id, name, price, emoji, qty }]
  couponCode: '',
  discountPercent: 0,
  couponError: '',
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        }
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] }
    }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) }

    case 'UPDATE_QTY': {
      const { id, qty } = action.payload
      if (qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== id) }
      }
      return {
        ...state,
        items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)),
      }
    }

    case 'APPLY_COUPON': {
      const code = action.payload.trim().toUpperCase()
      if (COUPONS[code]) {
        return { ...state, couponCode: code, discountPercent: COUPONS[code], couponError: '' }
      }
      return { ...state, couponCode: '', discountPercent: 0, couponError: 'Invalid coupon code' }
    }

    case 'CLEAR_COUPON':
      return { ...state, couponCode: '', discountPercent: 0, couponError: '' }

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const discountAmount = (subtotal * state.discountPercent) / 100
  const taxable = subtotal - discountAmount
  const gst = taxable * GST_RATE
  const grandTotal = taxable + gst
  const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0)

  const value = {
    items: state.items,
    couponCode: state.couponCode,
    discountPercent: state.discountPercent,
    couponError: state.couponError,
    subtotal,
    discountAmount,
    gst,
    grandTotal,
    itemCount,
    addItem: (product) => dispatch({ type: 'ADD_ITEM', payload: product }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    updateQty: (id, qty) => dispatch({ type: 'UPDATE_QTY', payload: { id, qty } }),
    applyCoupon: (code) => dispatch({ type: 'APPLY_COUPON', payload: code }),
    clearCoupon: () => dispatch({ type: 'CLEAR_COUPON' }),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Custom hook so components just call useCart() instead of useContext(CartContext)
export function useCart() {
  return useContext(CartContext)
}
