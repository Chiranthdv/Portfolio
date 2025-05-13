// import "../components/Home.css";
// import "../App.css";
// import codingImage from '../assets/image.png';
// import { Link } from 'react-scroll'; // For smooth scrolling

// const Home = () => {
//   return (
//     <div>
//       {/* Welcome section */}
//       <section id="home" className="home-section background">
//         <div className="content">
//           <h1>Hi There! 👋</h1>
//           <h2>
//             I&apos;M <span style={{ color: "#a445ed" }}>Chiranth D V</span>
//           </h2>
//           <h3 style={{color:"#a445ed"}}>Software Developer</h3>
//         </div>
//         <div className="image-container">
//           <img src={codingImage} alt="Coding Illustration"/>
//         </div>
//       </section>

//       {/* Scroll Down Button */}
//       <Link to="about" smooth={true} duration={500} className="scroll-down-btn">
//         Scroll Down
//       </Link>

//       {/* About/Introduction Section */}
//       <section id="about" className="about-section">
//         <div className="about-content">
//           <h2>LET ME INTRODUCE MYSELF</h2>
//           <p>
//             I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
//           </p>
//           <p>
//             I am fluent in classics like Java, Javascript, and the MERN Stack.
//           </p>
//           <p>
//             My fields of interest are building new web technologies and products, and I’m also interested in algorithms.
//           </p>
//           <p>
//             Whenever possible, I apply my passion for developing products with Node.js and modern JavaScript libraries and frameworks like React.js.
//           </p>


//           <h3>FIND ME ON</h3>
//           <p>Feel free to connect with me</p>
//           <p>Designed and Developed by Chiranth D V</p>
//           <p>&#169; 2025 dv</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import "./Home.css";
import "../App.css";
import codingImage from '../assets/image.png';
import { Link } from 'react-scroll';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

const Home = () => {
  return (
    <div>
      {/* Welcome Section */}
      <section id="home" className="home-section background">
        <div className="content">
          <h1>Hi There! 👋</h1>
          <h2>
            I&apos;M <span style={{ color: "#a445ed" }}>Chiranth D V</span>
          </h2>
          <h3 style={{ color: "#a445ed" }}>Software Developer</h3>
        </div>
        <div className="image-container">
          <img src={codingImage} alt="Coding Illustration" />
        </div>
      </section>

      {/* Home Scroll Down Button */}
      <Link to="home" smooth={true} duration={500} className="scroll-down-btn">
        Scroll Down
      </Link>

      {/* About Section */}
      <section id="home" className="about-section">
        <div className="about-content">
          <h2>LET ME INTRODUCE MYSELF</h2>
          <p>
            I fell in love with programming and I have at least learned something, I think… 🤷‍♂️
          </p>
          <p>
            I am fluent in classics like Java, Javascript, and the MERN Stack.
          </p>
          <p>
            My fields of interest are building new web technologies and products, and I’m also interested in algorithms.
          </p>
          <p>
            Whenever possible, I apply my passion for developing products with Node.js and modern JavaScript libraries and frameworks like React.js.
          </p>

          {/* Find Me On */}
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
    </div>
  );
};

export default Home; 