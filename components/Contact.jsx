'use client';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="title">Contact</h2>
      <div className="contact-content">
        <p>Interested in working together? Contact me!</p>
        <div className="social-links">
          <a href="https://github.com/louire" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/louirecio" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:lreciopersonal@gmail.com" aria-label="Email">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}