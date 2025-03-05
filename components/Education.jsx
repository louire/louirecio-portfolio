'use client';

import { useEffect } from 'react';
import Link from 'next/link';

// Education data
const educations = [
  {
    id: 1,
    title: 'Computer Systems Engineering',
    type: 'Bachelor\'s Degree',
    institution: 'Instituto Tecnologico De Matamoros',
    date: '2018 - 2023',
    description: 'Bachelor\'s in Computer Systems Engineering with specialization in Industry 4.0 technologies, encompassing IoT systems development for smart manufacturing, Big Data analytics implementation for production processes, and industrial cybersecurity protocols. Advanced training in emerging technologies integration for digital transformation and manufacturing optimization.',
    achievements: ['GPA: 9.0/10', 'Honors Thesis']
  },
  {
    id: 2,
    title: 'Software Developer',
    type: 'Professional Certification',
    institution: 'Platzi',
    date: '2024 - Present',
    description: 'Platzi is one of Latin America\'s largest professional online education platforms, specializing in technology, programming, and digital skills. Through this certification program, I\'ve completed intensive courses in:',
    courseLinks: [
      { text: 'OWASP Top 10: Application Security Risks', url: 'https://platzi.com/p/louirecioK/curso/9342-owasp-top-10/diploma/detalle/' },
      { text: 'Git and GitHub Fundamentals', url: 'https://platzi.com/p/louirecioK/curso/11059-gitgithub/diploma/detalle/' },
      { text: 'Data Analysis with Power BI', url: 'https://platzi.com/p/louirecioK/curso/2676-powerbi/diploma/detalle/' },
      { text: 'Web Development with Blazor and .NET Core 3', url: 'https://platzi.com/p/louirecioK/curso/1837-blazor-3/diploma/detalle/' }
    ],
    achievements: ['Software Development']
  },
  {
    id: 3,
    title: 'Platzi English Academy',
    type: 'Professional Course',
    institution: 'Platzi',
    date: '2023',
    description: 'Currently at B2 level (Upper Intermediate) in Platzi\'s comprehensive English program, actively working towards C1 proficiency. The program focuses on:',
    listItems: [
      'Advanced Business Communication',
      'Technical English for Software Development',
      'Professional Writing and Documentation',
      'Public Speaking and Presentations',
      'B2 Level Certification',
      'Preparing for C1 Advanced Level'
    ],
    achievements: ['Certificate of Excellence']
  }
];

export default function Education() {
  useEffect(() => {
    // Animation effect using Intersection Observer
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      const cards = document.querySelectorAll('.education-card');
      
      const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
      });

      return () => {
        cards.forEach(card => observer.unobserve(card));
      };
    }
  }, []);

  return (
    <section id="education" className="education">
      <h2 className="title">Education & Courses</h2>
      <div className="education-grid">
        {educations.map((edu) => (
          <article key={edu.id} className="education-card">
            <div className="education-content">
              <div className="education-header">
                <h3 className="education-title">{edu.title}</h3>
                <span className="education-type">{edu.type}</span>
              </div>
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-date">{edu.date}</p>
              
              {/* Description */}
              <div className="education-description">
                <p>{edu.description}</p>
                
                {/* Course Links - Now outside of p tag */}
                {edu.courseLinks && (
                  <ul>
                    {edu.courseLinks.map((course, idx) => (
                      <li key={idx}>
                        <Link href={course.url} target="_blank" rel="noopener noreferrer">
                          {course.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* List Items - Now outside of p tag */}
                {edu.listItems && (
                  <ul>
                    {edu.listItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
              
              {edu.achievements && (
                <div className="education-achievements">
                  {edu.achievements.map((achievement, idx) => (
                    <span key={idx} className="achievement">{achievement}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}