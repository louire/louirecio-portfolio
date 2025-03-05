'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><Link href="#home">home</Link></li>
            <li><Link href="#projects">projects</Link></li>
            <li><Link href="#experience">experience</Link></li>
            <li><Link href="#skills">skills</Link></li>
            <li><Link href="#contact">contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Networks</h3>
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
            <a href="https://x.com/louireciok" target="_blank" rel="noopener noreferrer" aria-label="X">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>email: lreciopersonal@gmail.com</p>
          <p>whatsapp: +52(868)250-0139</p>
          <p>Tamaulipas, Mexico</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Loui Recio Izaguirre. All rights reserved.</p>
        <p>Made with <span className="heart">❤️</span> and NextJs <img className="nextlogo" src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Next.js Logo" style={{ height: '1em', verticalAlign: 'middle' }} /> in 🇲🇽</p>
      </div>
    </footer>
  );
}