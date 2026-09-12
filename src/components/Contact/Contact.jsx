import { socialLinks } from '../../data/links'
import './Contact.css'

export const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-content">
        <p className="contact-text">
          Si tenés una idea, un proyecto o simplemente querés charlar sobre desarrollo, no dudes en
          contactarme.
        </p>

        <div className="contact-links">
          <a
            href={socialLinks.email}
            className="contact-link"
          >
            Email
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
