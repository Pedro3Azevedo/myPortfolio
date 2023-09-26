import { useEffect, useState } from "react";

interface SkillItem {
  skill: string;
  img: string;
}

interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

function HardSkills() {
  const [skillData, setSkillData] = useState<SkillCategory[]>([]);

  useEffect(() => {
    async function fetchSkillData() {
      try {
        const response = await fetch("/skillsCategory.json"); // Fetch from public folder
        const jsonData = await response.json();
        setSkillData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchSkillData();
  }, []);

  return (
    <>
      <section className="container">
        <h1 className="title">Hard Skills</h1>
        <div id="hard-skills">
          {skillData.map((category, categoryIndex) => (
            <div className="skill-category" key={categoryIndex}>
              <h2>{category.category}</h2>
              <div className="skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <img id={skill.skill} src={skill.img} alt={skill.skill} />
                    <p>{skill.skill}</p>
                  </div>
                ))}
              </div>
              <a className={"see-project"} href={`/projects/${category.category}`}> <i className="fa-solid fa-arrow-right"></i> See Projects </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HardSkills;
