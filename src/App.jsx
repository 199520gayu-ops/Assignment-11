import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Project from './Project';
import './index.css';

function App() {
  return (
    <Router>
      <nav className='relative bg-purple-900'>
        <Link className=' rounded-md px-3 py-2 text-6xl font-medium text-gray-300 hover:bg-white/5 hover:text-white'>Gayathri</Link>


        <div className=' relative flex mx-auto justify-center space-x-4'>

        
        <ul className='relative flex'>
          
          
          <li>
            <Link to="/" className='rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-white/5 hover:text-white'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-white/5 hover:text-white'>About</Link>
          </li>
          <li>
            <Link to="/project" className='rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-white/5 hover:text-white'>Project</Link> {/* Example parameterized link */}
          </li>
          <li>
            <Link to="/Education" className='rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-white/5 hover:text-white'>Education</Link>
          </li>
        </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/education" element={<Education />} /> {/* Parameterized route */}
      </Routes>
    </Router>
  );
}

export default App;