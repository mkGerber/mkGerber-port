import { useTransition, useDeferredValue } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import Projects from "./Projects.jsx";
import ProjectDetail from "./ProjectDetail.jsx";

function App() {
  const [isPending, startTransition] = useTransition();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/resume" 
          element={<Resume />} 
        />
        <Route 
          path="/projects" 
          element={<Projects />} 
        />
        <Route 
          path="/project/:id" 
          element={<ProjectDetail />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
