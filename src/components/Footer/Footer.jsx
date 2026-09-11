import { socialLinks } from '../../data/links'
import './Footer.css'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          <span>vadone.</span> &copy; {year}
        </p>
        <div className="footer-links">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href={socialLinks.email} className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
