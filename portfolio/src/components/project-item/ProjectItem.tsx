import "./ProjectItem.scss";
import React from "react";
import { Project } from "../../types/project";

interface ProjectItemProps {
  project: Project;
}

function ProjectItem(props: ProjectItemProps) {
  return (
    <section className="item">
      <h4 className="item__name">{props.project.name}</h4>
      <div className="item__container">
      <img className="item__image" src={props.project.image} alt="img"></img>
      <p className="item__description">{props.project.description}</p>
      </div>


    </section>
  );
}

export default ProjectItem;
