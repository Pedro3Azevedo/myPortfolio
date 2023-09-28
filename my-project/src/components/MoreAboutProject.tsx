import {useEffect, useState} from "react";

interface ProjectProps {
    name: string | undefined;
}

interface ProjectDataItem {
    category: string;
    name: string;
    images: { image: string }[];
    documents: { document: string }[];
    description: string;
    technologies: string[];
    github: string;
}

interface SkillItem {
    name: string;
    img: string;
}


function MoreAboutProject({name}: ProjectProps) {
    const [projectData, setProjectData] = useState<ProjectDataItem | null>(null); // Use null as the initial state
    const [skillData, setSkillData] = useState<SkillItem[]>([]);

    useEffect(() => {
        async function fetchProjectData() {
            try {
                const response = await fetch("/moreAboutProjects.json"); // Fetch from public folder
                const jsonData: ProjectDataItem[] = await response.json();

                // Find the project with the specified name
                const selectedProject = jsonData.find((project) => project.name === name);

                if (selectedProject) {
                    setProjectData(selectedProject);

                    // Fetch skill data
                    const response2 = await fetch("/skills.json");
                    const jsonData2: SkillItem[] = await response2.json();

                    // Filter skills based on project technologies
                    const filteredSkills = jsonData2.filter((skill) =>
                        selectedProject.technologies.includes(skill.name)
                    );

                    setSkillData(filteredSkills);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchProjectData();
    },);

    return (
        <div>
            {projectData ? (
                <div>
                    <h3>{projectData.name}</h3>

                    <p>{projectData.description}</p>
                    {
                     /*   projectData.images.map((image) => (
                            <img src={image.image} alt={projectData.name}/>
                        ))*/}

                    <div className="skills">
                        {skillData.map((skill, skillIndex) => (
                            <div key={skillIndex} className="skill-item">
                                <img id={skill.name} src={skill.img} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default MoreAboutProject;
