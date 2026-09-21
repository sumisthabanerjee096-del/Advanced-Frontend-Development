import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import './Contact.css'

const CONTACT_INFO = [
  { label: 'Email', value: 'sumisthabanerjee2022@gmail.com', href: 'mailto:your.email@example.com' },
  { label: 'Phone', value: '+91 9635050554', href: 'tel:+910000000000' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sumisthabanerjee', href: 'https://linkedin.com/in/yourname' },
  { label: 'GitHub', value: 'https://github.com/sumisthabanerjee096-del', href: 'https://github.com/yourusername' },
]

function Contact() {
  const { ref, isVisible } = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" ref={ref} className={`contact reveal ${isVisible ? 'is-visible' : ''}`}>
      <p className="section-label">Contact</p>
      <h2>Let's talk</h2>

      <div className="contact__grid">
        <ul className="contact__list">
          {CONTACT_INFO.map((item) => (
            <li key={item.label}>
              <span className="contact__label">{item.label}</span>
              <a href={item.href} target="_blank" rel="noreferrer">{item.value}</a>
            </li>
          ))}
        </ul>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="3" value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="contact__submit">Send message</button>
          {sent && <p className="contact__confirm" role="status">Thanks — your message was noted.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
