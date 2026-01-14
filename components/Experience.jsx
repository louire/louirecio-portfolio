'use client';

import { useEffect } from 'react';

// Experience data
const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Plews & Edelmann | On site',
    date: '03/2025 - Present',
    description: 'Lead the continuous development of a full-scale ERP platform built with Django and Django REST Framework, designing and maintaining complex, high-performance APIs and core business systems. Developed executive-level reporting and analytics tools using Python and Excel to support strategic decision-making. Implemented CI/CD pipelines to streamline deployments and improve development workflows. Designed and deployed demand- and inventory-based planning systems, incorporating AI/ML-driven algorithms to enhance forecasting accuracy and operational efficiency.'
  },
  {
    id: 2,
    title: 'Software Developer',
    company: 'LR Solutions - Freelancer | Hybrid',
    date: '03/2024 - 02/2025',
    description: 'Developed and deployed high-impact applications from IoT systems to business platforms using React, Django, Node.js, and Python. Architected systems and RESTful APIs, achieving top SEO rankings and implementing automated workflow solutions across multiple projects.'
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    company: 'Johnson Controls | On site',
    date: '03/2023 - 03/2024',
    description: 'Engineered an enterprise management system using .NET ecosystem (Blazor, ASP.NET Core, .NET 8) and DevExpress, reducing processing times by 45%. Optimized SQL Server and MongoDB databases while implementing Power BI analytics solutions, resulting in 40% performance improvement and $24,000 annual savings through automated reporting and real-time monitoring dashboards.'
  },
  {
    id: 4,
    title: 'Data Analyst Intern',
    company: 'Herbalife | Remote',
    date: '01/2023 - 03/2023',
    description: 'Created interactive dashboards using Tableau and Python for ETL processes, implementing automated reporting workflows and data visualizations that enabled data-driven decision making through customer behavior and KPI analysis.'
  }
];

export default function Experience() {
  useEffect(() => {
    // Animation effect using Intersection Observer
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      const cards = document.querySelectorAll('.experience-card');
      
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
    <section id="experience" className="experience">
      <h2 className="title">Work Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <article key={exp.id} className="experience-card">
            <div className="experience-content">
              <h3 className="experience-title">{exp.title}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-date">{exp.date}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}