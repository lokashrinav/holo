import React from 'react';
import HoloCard from '../components/HoloCard';

function ProjectsSection() {
  const projects = [
    { id: 1, title: 'Project One', description: 'A futuristic project...' },
    { id: 2, title: 'Project Two', description: 'Another neon adventure...' },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="neon-text">Projects</h2>
      {projects.map((p) => (
        <HoloCard key={p.id} title={p.title}>
          <p>{p.description}</p>
        </HoloCard>
      ))}
    </section>
  );
}

export default ProjectsSection;
