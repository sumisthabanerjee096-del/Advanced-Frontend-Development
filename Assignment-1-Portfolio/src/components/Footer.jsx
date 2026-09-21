import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} Your Name</p>
      <div className="footer__links">
        <a href="https://github.com/sumisthabanerjee096-del" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/sumisthabanerjee" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
