'use client';

import { useEffect } from 'react';

// Skills data
const skillCategories = [
  {
    id: 1,
    title: 'Programming Languages',
    skills: ['Python', 'C#', 'Rust', 'Javascript', 'Shell / Bash', 'Php', 'SQL','C++']
  },
  {
    id: 2,
    title: 'Continuously Studying',
    skills: ['Python', 'Rust', 'Tokio (Asynchronous runtime for Rust)','Web3 | Blockchain', 'AI & Data Science', 'Backend Technologies', 'Mandarin (Chinese)', 'Bare Metal']
  },
  {
    id: 3,
    title: 'Technologies & OS\'s',
    skills: ['Django', 'React & Node.js | NextJs',"Bun & Npm", 'PostgreSQL, MySQL & SQL Server', 'MongoDB', 'Redis', 'Raspberry Pi\'s & Arduino', 'MacOS, Linux & Windows']
  }
];

export default function Skills() {
  useEffect(() => {
    // Animation effect using Intersection Observer
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      const cards = document.querySelectorAll('.skills-card');
      
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
    <section id="skills" className="skills">
      <h2 className="title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article key={category.id} className="skills-card">
            <h3 className="skills-title">{category.title}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}