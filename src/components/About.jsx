// import './About.css'; // Include styles for About page
// import '../App.css'; // For the same background as the home page
// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// const About = () => {
//   return (
//     <section className="about-section background">
//       <div className="about-content">
//         <h2 style={{color:"white"}}>Know Who I&apos;M</h2>
//         <p style={{color:"white"}}>
//           Hi Everyone, I am <strong>Chiranth D V</strong> from Karnataka, India. <br />
//           I am currently pursuing my B.Tech in Computer Science from <br />
//           <strong>M S Ramaiah Institute of Technology (2023–2027)</strong>.
//         </p >
//         <p style={{color:"white"}}>Apart from coding, some other activities that I love to do:</p>
//         <ul>
//           <li>📝 Writing Blogs on Medium</li>
//           <li>🎮 Playing Games</li>
//           <li>🎬 Watching Movies</li>
//         </ul>
//         <p ><em style={{color:"white"}}>Strive to build things that make a difference</em></p>
        
//         {/* Add an image related to coding */}
//         <img
//           className="about-image"
//           src="client\src\assets\image.png" // Replace with the actual path to the image related to coding (e.g., laptop, code editor)
//           alt="Chiranth D V"
//         />
        
//         {/* Optionally, add social links */}
//         <div className="find-me-on">
//                     <h3>FIND ME ON</h3>
//                     <div className="social-links">
//                       <a href="https://www.linkedin.com/in/chiranth-d-v-437221281/" target="_blank" rel="noopener noreferrer">
//                         <FaLinkedin size={40} className="social-icon" />
//                       </a>
//                       <a href="https://github.com/Chiranthdv" target="_blank" rel="noopener noreferrer">
//                         <FaGithub size={40} className="social-icon" />
//                       </a>
//                       <a href="https://www.instagram.com/chiranth__45?igsh=a2dndTRna25zMDM0" target="_blank" rel="noopener noreferrer">
//                         <FaInstagram size={40} className="social-icon" />
//                       </a>
//                     </div>
//                   </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import './About.css'; // Include styles for About page
// import '../App.css'; // For the same background as the home page
// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// const About = () => {
//   return (
//     <section className="about-section background">
//       <div className="about-content">
//         <h2 style={{color:"white"}}>Know Who I&apos;M</h2>
//         <p style={{color:"white"}}>
//           Hi Everyone, I am <strong>Chiranth D V</strong> from Karnataka, India. <br />
//           I am currently pursuing my B.Tech in Computer Science from <br />
//           <strong>M S Ramaiah Institute of Technology (2023–2027)</strong>.
//         </p >
//         <p style={{color:"white"}}>Apart from coding, some other activities that I love to do:</p>
//         <ul>
//           <li>📝 Writing Blogs on Medium</li>
//           <li>🎮 Playing Games</li>
//           <li>🎬 Watching Movies</li>
//         </ul>
//         <p ><em style={{color:"white"}}>Strive to build things that make a difference</em></p>
        
//         {/* Add an image related to coding */}
//         <img
//           className="about-image"
//           src="client\src\assets\image.png" // Replace with the actual path to the image related to coding (e.g., laptop, code editor)
//           alt="Chiranth D V"
//         />
        
//         {/* Optionally, add social links */}
//         <div className="find-me-on">
//                     <h3>FIND ME ON</h3>
//                     <div className="social-links">
//                       <a href="https://www.linkedin.com/in/chiranth-d-v-437221281/" target="_blank" rel="noopener noreferrer">
//                         <FaLinkedin size={40} className="social-icon" />
//                       </a>
//                       <a href="https://github.com/Chiranthdv" target="_blank" rel="noopener noreferrer">
//                         <FaGithub size={40} className="social-icon" />
//                       </a>
//                       <a href="https://www.instagram.com/chiranth__45?igsh=a2dndTRna25zMDM0" target="_blank" rel="noopener noreferrer">
//                         <FaInstagram size={40} className="social-icon" />
//                       </a>
//                     </div>
//                   </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import './About.css';
import '../App.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Skill Logos
import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import react from '../assets/react.png';
import mongo from '../assets/mongo.png';
import sql from '../assets/sql.png';
import git from '../assets/git.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';

const About = () => {
  const skills = [
    { name: "Java", icon: java },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "Node.js", icon: node },
    { name: "Express", icon: express },
    { name: "React", icon: react },
    { name: "MongoDB", icon: mongo },
    { name: "SQL", icon: sql },
    { name: "Git", icon: git },
    { name: "Tailwind", icon: tailwind },
    { name: "Bootstrap", icon: bootstrap },
  ];

  return (
    <section className="about-section background">
      <div className="about-content">
        <h2>Know Who I&apos;M</h2>
        <p>
          Hi Everyone, I am <strong>Chiranth D V</strong> from Karnataka, India. <br />
          I am currently pursuing my B.Tech in Computer Science from <br />
          <strong>M S Ramaiah Institute of Technology (2023–2027)</strong>.
        </p>
        <p>Apart from coding, some other activities that I love to do:</p>
        <ul>
          <li>📝 Writing Blogs on Medium</li>
          <li>🎮 Playing Games</li>
          <li>🎬 Watching Movies</li>
        </ul>
        <p><em>Strive to build things that make a difference</em></p>

        <div className="skills-grid">
          <h3>Professional Skillset</h3>
          <div className="grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="find-me-on">
          <h3>FIND ME ON</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/chiranth-d-v-437221281/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} className="social-icon" />
            </a>
            <a href="https://github.com/Chiranthdv" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/chiranth__45?igsh=a2dndTRna25zMDM0" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
