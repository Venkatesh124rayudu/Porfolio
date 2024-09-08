// src/pages/Projects.jsx
import React from 'react';
import Project_card from '../components/project_card';
import project from '../javascript/projects';


function eachproject(eachprojectdetail) {
  return <Project_card 
  key={eachprojectdetail.id}
  title={eachprojectdetail.title} 
  discription={eachprojectdetail.description} 
  github={eachprojectdetail.github} />
}

const Projects = () => {
  return <>
  <div className="pagesAline" id='projects'>
  <h1 className='Heading'>Projects</h1>
    <div className='rowpage'>
    
    {project.map(eachproject)}
  </div>
  </div>
  </>;
}

export default Projects;
