import { useParams } from "react-router";
import { projects } from "./Projects";

function ProjectsDetails() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) return <p>Projeto nao encontrado</p>;

    return(
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectsDetails;
