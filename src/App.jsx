import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
import profiles from './javascript/content';

const [profile] = profiles;
const {
  name,
  profession,
  image,
  discription,
  contactDetails: { email, LinkedIn, gitHub },
} = profile;

const App = () => {
  return (
    <Router basename="/Porfolio"> {/* This ensures correct routing for GitHub Pages */}
      <Nav />
      <div className="card1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                profession={profession}
                image={image}
                discription={discription}
                gitHub={gitHub}
                LinkedIn={LinkedIn}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact LinkedIn={LinkedIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
