import './Project.css';
import AirBnb from '../assets/airbnb.png';
import Fit from '../assets/fit.png';
import Pass from '../assets/passw.png';

const projects = [
  {
  title: "Airbnb Website",
  image: AirBnb,
  description: "Built a full-stack Airbnb clone with responsive design, user authentication, property listings, booking functionality, and integration with real-time databases. Implemented features like date availability checks, search filters, and user dashboards.",
  github: "https://github.com/Chiranthdv/Backend-Airbnb-",
  demo: "https://chiranth1.onrender.com"
}
,
  {
  title: "Fitness Center Website",
  image: Fit,
  description: "Designed and developed a responsive website for a fitness center, featuring service sections, class schedules, membership plans, and contact forms to enhance client engagement and online presence.",
  github: "https://github.com/Chiranthdv/Firstwebproject.git",
  demo: "https://chiranthdv.github.io/Firstwebproject/"
}
,
  {
    title: "Random Password Generator",
    image: Pass,
    description: "Generate passwords with constraints like uppercase, lowercase, numbers, symbols, and length.",
    github: "https://github.com/Chiranthdv/Password-Generator.git",
    demo: "https://github.com/Chiranthdv/Password-Generator.git"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2><span>My Recent</span> Works</h2>
      <p>Here are a few projects I&apos;ve worked on recently.</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
             <img src={project.image} alt={project.title} className="project-img" /> 
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
