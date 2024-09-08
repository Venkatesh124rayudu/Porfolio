import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
  contactDetails: { email, LinkedIn,gitHub },
} = profile;

const App = () => {
  return (
    <Router>

      <Nav />
      <div className="card1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home
                  name={name}
                  profession={profession}
                  image={image}
                  discription={discription}
                  gitHub={gitHub}
                  LinkedIn={LinkedIn}
                />
                <About />
                <Projects />
                <Contact LinkedIn={LinkedIn} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
