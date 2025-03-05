'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="title">Loui Recio Izaguirre</h1>
        <p className="subtitle">Software Engineer | Data Analyst & a Bachelor's in Computer Systems Engineering</p>
        <p className="subtitle"></p>
        <p>
          A curious and self-taught software engineer specialized in Python, Rust, and C#. Driven by a fascination
          with AI and low-level programming, always seeking to expand my technical horizons and tackle new
          challenges.
        </p>
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
        <a href="/assets/Loui_Recio_Izaguirre_Resume.pdf" className="btn" style={{ marginTop: '1rem' }} download>
          Download Resume
        </a>
      </div>
      <Image 
        src="/assets/images/ProfilePic.jpg" 
        alt="Profile picture" 
        className="profile-img" 
        width={300} 
        height={300}
        priority
      />
    </section>
  );
}