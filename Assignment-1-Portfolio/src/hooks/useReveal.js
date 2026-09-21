import { useEffect, useRef, useState } from 'react'

// Adds a "reveal" fade-in effect when an element scrolls into view.
// Usage: const { ref, isVisible } = useReveal()
export function useReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node) // only reveal once
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
