import './Header.css'

function Header() {
  return (
    <header className="hero" id="top">
      <div className="hero__glow" />
      <div className="hero__avatar">SB</div>
      <p className="hero__eyebrow">Portfolio</p>
      <h1 className="hero__title">
        Hi, I'm <span>Sumistha</span>
      </h1>
      <p className="hero__role">Computer Application Student · Aspiring Data Analyst</p>
    
      <p className="hero__subtitle">
      I build data-driven solutions and insightful dashboards, 
      and I'm currently deepening my skills in data analysis,
       visualization, SQL, Python, Excel, and Power BI.
      </p>
      <div className="hero__actions">
        <a className="hero__cta" href="#contact">Get in touch</a>
        <a className="hero__link" href="#about">More about me ↓</a>
      </div>
    </header>
  )
}

export default Header
