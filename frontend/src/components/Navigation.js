import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiList, FiGlobe, FiMail } from "react-icons/fi";


function Navigation() {
  return (
    <nav>
        <Link to="/"><FiHome /> Home</Link>
        <Link to="/triplist"><FiList /> Trip List</Link>
        <Link to="/topics"><FiGlobe /> Topics</Link>
        <Link to="/contact"><FiMail /> Contact</Link>
    </nav>
  );
}

export default Navigation;
