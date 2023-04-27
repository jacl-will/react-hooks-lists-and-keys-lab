import React from "react";
// import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
const tech = technologies.map((technology) => console.log(technology))


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        
      </div>
    </div>
  );
}

export default ProjectItem;
