import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function Home() {
  return (
    <div className='flex text-xl font-medium text-gray-900'>
       
       <div className=' content1 text-4xl mx-50  flex flex-col   mt-30'>
        <h3>Hi, I'm <span className="text-red-900 content-(--my-content)whitespace-pre-line ">GAYATHRI.</span></h3>
    <h4 className='content3'>a Fullstack Web Developer.</h4>
    <p className="content-(--my-content) whitespace-break-spaces">My portfolio showcases projects in both front-end and back-end development. I specialize in the MERN stack. Explore my work to see how I bring ideas to life with clean, efficient code.</p>

      </div>
       </div>
       
  );
}

export default Home;