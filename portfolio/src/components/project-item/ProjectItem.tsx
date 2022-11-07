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
        <div>
          <div className="item__container-description">
            <div>
            <p className="item__description">{props.project.description}</p>
            <p className="item__tech">
              Technologies: {props.project.tech.join(", ")}{" "}
            </p>
            </div>
            <div className="item__links">
              <a
                className="item__github"
                href={props.project.github_url}
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon fab fa-github-square"></i>
              </a>
              <a
                className="item__github"
                href={props.project.url}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectItem;
