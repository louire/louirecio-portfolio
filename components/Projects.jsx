'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Project data
const projects = [
  {
    id: 1,
    title: 'Ferrum DB ⚙️',
    description: 'A modern terminal-based database client written in Rust. FerrumDB provides an intuitive TUI (Text User Interface) for interacting with your databases.',
    imageUrl: '/assets/images/RepoFerrumDB.jpg',
    githubUrl: 'https://github.com/louire/ferrum_db'
  },
  {
    id: 2,
    title: 'Pomodoro RS 🍅',
    description: 'A friendly Pomodoro timer CLI application built with Rust, featuring cute emojis, encouraging messages, sound alerts, and a powerful yet simple interface.',
    imageUrl: '/assets/images/PomodoroRsRepo.png',
    githubUrl: 'https://github.com/louire/pomodoro_rs'
  },
  {
    id: 3,
    title: 'Rust Discord Bot 🦀',
    description: 'A Discord music bot built with Rust, featuring voice channel integration and YouTube playback. Developed using Serenity framework and Songbird for efficient audio processing.',
    imageUrl: '/assets/images/DiscordPlaysPhoto.jpg',
    githubUrl: 'https://github.com/louire/discord_plays'
  },
  {
    id: 4,
    title: 'This Portfolio 🌟',
    description: ' A personal portfolio website built with Next.js. This project showcases my skills, projects, and experiences as a software developer.',
    imageUrl: '/assets/images/PortfolioRepo.jpg',
    githubUrl: 'https://github.com/louire/louirecio-portfolio'
  },
  {
    id: 5,
    title: 'UC - Under Construction',
    description: 'Excepteur sint occaecat cupidatat non proident.',
    imageUrl: '/assets/project5.jpg',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'UC - Under Construction',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: '/assets/project6.jpg',
    githubUrl: '#'
  },
  {
    id: 7,
    title: 'UC - Under Construction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/assets/project7.jpg',
    githubUrl: '#'
  },
  {
    id: 8,
    title: 'UC - Under Construction',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/assets/project8.jpg',
    githubUrl: '#'
  },
  {
    id: 9,
    title: 'UC - Under Construction',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/assets/project9.jpg',
    githubUrl: '#'
  },
  {
    id: 10,
    title: 'UC - Under Construction',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/assets/project10.jpg',
    githubUrl: '#'
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="projects">
      <h2 className="title">My Projects</h2>
      <div className={`projects-grid ${showAll ? 'show-all' : ''}`}>
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-img-container" style={{ position: 'relative', width: '100%', height: '200px' }}>
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="project-img"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <Link href={project.githubUrl} className="btn" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </Link>
            </div>
          </article>
        ))}
      </div>
      <button className="btn load-more" onClick={toggleShowAll}>
        {showAll ? 'Show Less' : 'Load more'}
      </button>
    </section>
  );
}