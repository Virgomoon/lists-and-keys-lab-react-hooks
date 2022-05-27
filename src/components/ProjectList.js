import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
  
        {
         projects.map((obj) =>{
           console.log(obj)
          return <ProjectItem key={obj.id} technologies={obj.technologies} name={obj.name} about={obj.about} />
        })} 
          </div>
        
    </div>
  );
}

export default ProjectList;
