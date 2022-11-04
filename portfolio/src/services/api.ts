import { Project } from "../types/project";

const getJson = (): Promise<Project[]> => {
    return fetch("projects.json")
      .then((response) => response.json())
      .then((response) => {
        return response.map((project: Project) => {
          return {
            id: project.id,
            name: project.name,
            image: project.image,
            url: project.url,
            github_url: project.github_url,
            description: project.description,
            tech: project.tech,
          };
        });
      });
  };
  
  export default getJson;