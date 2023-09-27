import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

interface ProjectCategoryItem {
    name: string;
    images: { image: string }[];
}

interface CategoryData {
    category: string;
    projects: ProjectCategoryItem[];
}

interface ProjectCategoryProps {
    category: string | undefined; // Define a prop for the category
}

function ProjectCategory({category}: ProjectCategoryProps) {
    const [projectCategoryData, setProjectCategoryData] = useState<ProjectCategoryItem[]>([]);

    useEffect(() => {
        async function fetchProjectCategoryData() {
            try {
                const response = await fetch("/projects.json"); // Fetch from public folder
                const jsonData: CategoryData[] = await response.json();

                // Filter projects with category "Frontend"
                const frontendProjects = jsonData
                    .filter((categoryItem) => categoryItem.category === category)
                    .flatMap((categoryItem) => categoryItem.projects);

                setProjectCategoryData(frontendProjects);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchProjectCategoryData();
    }, []);

    return (
        <>


            <h3 className="title">{category}</h3>


            <div className="projects-cont">

                {projectCategoryData.map((item) => (
                    <div key={item.name} className="project">
                        <h4 className={"project-name"}>{item.name}</h4>
                        <img src={item.images[0].image} alt={item.name}/>
                        <Link to={`/projects/${item.name}`} className={"see-project"}>
                            <i className="fa-solid fa-arrow-right"></i> See More about this project
                        </Link>
                    </div>
                ))}
            </div>

        </>
    );
}

export default ProjectCategory;
