import React, { useEffect, useRef, useState } from 'react';
import "./About.css"; // Assuming your CSS file is named About.css

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.4 } // Adjust as needed for how much of the element needs to be visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className={`pagesAline animateAbout ${isVisible ? 'visible' : ''}`} id="about" ref={aboutRef}>
      <h1 className='Heading'>About Me</h1>
      <div id="hero-text">
        <p>
          I am <span className="highlight c1">Venkatesh Rayudu</span>, currently pursuing a <span className="highlight c2">Bachelor of Engineering</span> at <span className="highlight c3">Sir. MVIT Bangalore.</span>
          I have a strong interest in programming languages like <span className="highlight c1">Java, HTML, CSS, JavaScript</span>, and <span className="highlight c2">Node.js</span>.
          I enjoy building web applications using frameworks such as <span className="highlight c3">Bootstrap, Express.js</span>, and <span className="highlight c1">React.js.</span> Additionally, I’m skilled in working with databases like <span className="highlight c2">MySQL</span> and <span className="highlight c3">MongoDB</span>.
          I'm always excited to learn new things and level up my skills, combining creativity with technical know-how to build Web apps that are both user-friendly and efficient!
        </p>
      </div>
    </div>
  );
}

export default About;
