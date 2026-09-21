import { useReveal } from '../hooks/useReveal.js'
import './Skills.css'

const SKILL_GROUPS = [
  {
    title: 'Languages',
    items: ['SQL', 'Python', 'Power BI', 'Excel', 'HTML5'],
  },
  {
    title: 'Web Development',
    items: ['HTML5'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git & GitHub', 'VS Code'],
  },
]

function Skills() {
  const { ref, isVisible } = useReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <p className="section-label">Skills</p>

      <h2>What I work with</h2>

      <div className="skills__groups">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="skills__group"
          >
            <h3>{group.title}</h3>

            <div className="skills__tags">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="skills__tag"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills