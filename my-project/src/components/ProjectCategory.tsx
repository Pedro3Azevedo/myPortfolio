import { useEffect, useState } from "react";

interface ProjectCategoryItem {
    name: string;
    images: { image: string }[];
}

interface CategoryData {
    category: string;
    projects: ProjectCategoryItem[];
}

interface ProjectCategoryProps {
    category: string; // Define a prop for the category
}

function ProjectCategory({ category }: ProjectCategoryProps) {
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
            <section id="projects">
                <div className="container">
                    <h1 className="title">Projects</h1>

                    {projectCategoryData.map((item) => (
                        <div key={item.name} className="event">
                            <div className="left">
                                <h2>{item.name}</h2>
                                <img src={item.images[0].image} alt={item.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProjectCategory;
