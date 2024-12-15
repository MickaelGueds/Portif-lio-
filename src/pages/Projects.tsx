import { Link } from "react-router";

export const projects = [
    { id: "1", title: "Projeto 1", description: "Descrição do Projeto 1" },
    { id: "2", title: "Projeto 2", description: "Descrição do Projeto 2" },
  ];

function Projects(){
      
    return(
        <div>
            <h2>Projetos...</h2>
            <p>Aqui estão meus projetos ~~ </p>
            {projects.map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`}>
                    {project.title}
                </Link>
            ))}
        </div>
    )
}

export default Projects;