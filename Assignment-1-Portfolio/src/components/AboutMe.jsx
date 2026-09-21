import { useReveal } from '../hooks/useReveal.js'
import './AboutMe.css'

function AboutMe() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="about" ref={ref} className={`about reveal ${isVisible ? 'is-visible' : ''}`}>
      <p className="section-label">About Me</p>
      <h2>A little about who I am</h2>
      <p className="about__lead">
            I'm a Computer Application undergraduate with a strong interest in data analysis and turning data into meaningful insights.
      </p>
      <p>
       I enjoy working with data, exploring patterns, and building practical dashboards and analytical solutions. I'm currently strengthening my skills in SQL, Python, Excel, Power BI, and data visualization. Outside of academics, I like exploring new tools, working on real-world projects, and continuously improving my analytical and problem-solving skills.
      </p>
    </section>
  )
}

export default AboutMe
