import React from "react";
import "./ProjectsSection.css";
import stockBacktesterImg from "../assets/stock-backtester.png"; // Replace with actual images
import scriptingImg from "../assets/scripting.png";
import fishCardGameImg from "../assets/fish-card-game.png";
import goFileDownloaderImg from "../assets/go-file-downloader.png";
import miniDatabaseImg from "../assets/mini-database.png";
import holoImg from "../assets/holo.png";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Stock-Backtester",
      description: "A Python-based backtesting framework for trading strategies.",
      image: stockBacktesterImg,
      language: "Python",
      github: "https://github.com/yourusername/Stock-Backtester",
    },
    {
      id: 2,
      title: "Scripting",
      description: "A collection of useful automation scripts in Python.",
      image: scriptingImg,
      language: "Python",
      github: "https://github.com/yourusername/Scripting",
    },
    {
      id: 3,
      title: "FishCardGame",
      description: "An interactive card game built using JavaScript.",
      image: fishCardGameImg,
      language: "JavaScript",
      github: "https://github.com/yourusername/FishCardGame",
    },
    {
      id: 4,
      title: "GoFileDownloader",
      description: "A high-performance file downloader written in Go.",
      image: goFileDownloaderImg,
      language: "Go",
      github: "https://github.com/yourusername/GoFileDownloader",
    },
    {
      id: 5,
      title: "MiniDatabase",
      description: "A lightweight in-memory database built in C++.",
      image: miniDatabaseImg,
      language: "C++",
      github: "https://github.com/yourusername/MiniDatabase",
    },
    {
      id: 6,
      title: "Holo",
      description: "A futuristic UI/UX project built with JavaScript.",
      image: holoImg,
      language: "JavaScript",
      github: "https://github.com/yourusername/holo",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="neon-text">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <img src={p.image} alt={p.title} className="project-image" />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span className={`language-tag ${p.language.toLowerCase()}`}>
                {p.language}
              </span>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
