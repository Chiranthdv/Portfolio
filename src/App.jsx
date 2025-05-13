
// import { useEffect, useState } from 'react';
// import './App.css';
// import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll'; 

// function App() {
//   const roles = ["MERN Stack Developer", "Software Developer"];
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentRole = roles[currentRoleIndex];
//     let timer;

//     if (!isDeleting && charIndex < currentRole.length) {
//       // Typing characters
//       timer = setTimeout(() => {
//         setDisplayText(currentRole.slice(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
//       }, 200);
//     } else if (isDeleting && charIndex > 0) {
//       // Deleting characters
//       timer = setTimeout(() => {
//         setDisplayText(currentRole.slice(0, charIndex - 1));
//         setCharIndex(charIndex - 1);
//       }, 100);
//     } else if (charIndex === currentRole.length && !isDeleting) {
//       // Pause before deleting
//       timer = setTimeout(() => setIsDeleting(true), 1000);
//     } else if (isDeleting && charIndex === 0) {
//       // Move to the next role
//       setIsDeleting(false);
//       setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
//     }

//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting, roles, currentRoleIndex]);

//   return (
//     <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white min-h-screen">
//       <header className="container mx-auto p-6">
//         <nav className="flex items-center justify-between -ml-12 ">
//           <h1 className="font-bold text-3xl">Chiranth D V</h1>
//           <div className="hidden md:flex gap-8">
//             <ScrollLink to="/" smooth={true} duration={500} className="hover:text-purple-500 cursor-pointer">About</ScrollLink>
//             <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-purple-500 cursor-pointer">Skills</ScrollLink>
//             <ScrollLink to="experience" smooth={true} duration={500} className="hover:text-purple-500 cursor-pointer">Experience</ScrollLink>
//             <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-purple-500 cursor-pointer">Projects</ScrollLink>
//             <ScrollLink to="education" smooth={true} duration={500} className="hover:text-purple-500 cursor-pointer">Education</ScrollLink>
//           </div>
//           <div>
//             <Link to="https://github.com/chiranthdv" target="_blank" rel="noopener noreferrer"
//               className="-mr-6 text-purple-500 border border-purple-700 px-6 py-2 rounded-3xl hover:bg-purple-700 hover:text-white transition">
//               GitHub Profile
//             </Link>
//           </div>
//         </nav>
//       </header>
//       <main>
//         <section className="text-white min-h-screen">
//           <h1 className="text-4xl font-bold mt-20 ml-16">
//             Hi, There
//           </h1>
//           <h1 className="text-5xl font-bold mt-4 ml-16">
//           I &apos;M Chiranth D V
//           </h1>
//           <h2 className="text-3xl font-semibold mt-4 ml-16">
//              <span className="text-purple-500">{displayText}</span>
//           </h2>
          
//         </section>

//         <section id="about" className="h-screen p-8 bg-gradient-to-r from-black via-gray-900 to-black  text-center">
//           <h2 className="text-4xl font-bold">About Me</h2>
//           <p className="mt-4 text-lg">This is the about section.</p>
//         </section>

//         <section id="skills" className="h-screen p-8 bg-gradient-to-r from-black via-gray-900 to-black text-center">
//           <h2 className="text-4xl font-bold">Skills</h2>
//           <p className="mt-4 text-lg">This is the skills section.</p>
//         </section>

//         <section id="experience" className="h-screen p-8 bg-gradient-to-r from-black via-gray-900 to-black text-center">
//           <h2 className="text-4xl font-bold">Experience</h2>
//           <p className="mt-4 text-lg">This is the experience section.</p>
//         </section>

//         <section id="projects" className="h-screen p-8 bg-gradient-to-r from-black via-gray-900 to-black text-center">
//           <h2 className="text-4xl font-bold">Projects</h2>
//           <p className="mt-4 text-lg">This is the projects section.</p>
//         </section>

//         <section id="education" className="h-screen p-8 bg-gradient-to-r from-black via-gray-900 to-black text-center">
//           <h2 className="text-4xl font-bold">Education</h2>
//           <p className="mt-4 text-lg">This is the education section.</p>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;


// import Navbar from "./components/Navbar.jsx";
// import Home from "./components/Home.jsx";
// //import About from "./components/About.jsx";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       {/* <About /> */}
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project.jsx';
import Resume from './components/Resume.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;


