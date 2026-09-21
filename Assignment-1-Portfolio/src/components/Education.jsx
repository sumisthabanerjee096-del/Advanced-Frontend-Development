import { useReveal } from '../hooks/useReveal.js'
import './Education.css'

const EDUCATION = [
  {
    period: '2023 — 2027',
    degree: 'Bachelor in Computer Application',
    place: 'Techno India University, Kolkata',
    detail: 'Relevant coursework: Data Structures, Web Technologies, DBMS.',
  },
  {
    period: '2021 — 2023',
    degree: 'Higher Secondary (Commerce)',
    place: 'Chaipat High School, West Bengal',

  },
]

function Education() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="education" ref={ref} className={`education reveal ${isVisible ? 'is-visible' : ''}`}>
      <p className="section-label">Education</p>
      <h2>Academic background</h2>

      <ol className="education__timeline">
        {EDUCATION.map((item) => (
          <li key={item.degree} className="education__item">
            <span className="education__period">{item.period}</span>
            <h3>{item.degree}</h3>
            <p className="education__place">{item.place}</p>
            <p className="education__detail">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Education
