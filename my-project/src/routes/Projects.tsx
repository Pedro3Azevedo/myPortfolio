import ProjectCategory from "../components/ProjectCategory.tsx";
import {useParams} from "react-router";

function Projects() {
    const {category} = useParams<{ category: string | undefined }>(); // Ensure category is of type string

    return (
        <>
            <section id="projects" className={"container"}>
                <h1 className="title">Projects</h1>
                <ProjectCategory category={category}/>
            </section>
        </>
    );
}

export default Projects;
