
// import "./Navbar.css";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">👾 Chiranth D V</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/resume">Resume</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">👾 Chiranth D V</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
