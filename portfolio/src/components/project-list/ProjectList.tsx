import "./ProjectList.scss";
import React from "react";
import { useEffect, useState } from "react";
import getJson from "../../services/api";
import Footer from "../footer/Footer";
import { Project } from "../../types/project";
import ProjectItem from "../project-item/ProjectItem";

function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getJson().then((response: Project[]) => {
      setProjects(response);
    });
  }, []);

  const renderProjects = () => {
    return projects.map((oneProject: Project) => {
      return (
        <ProjectItem project={oneProject} />
      );
    })
  }

  return (
    <div>
      <section className="list">
        <h3 className="list__title">My Projects:</h3>
        <p className="list__text">
          Here you can see some of the things I have built
        </p>

        <ul>{renderProjects()}</ul>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectList;
