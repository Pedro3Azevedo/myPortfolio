import HardSkills from "./HardSkills";

const skillsData = [
  "Emotional Inteligence",
  "Learning midset",
  "Flexibility",
  "Proactivity",
  "Critical Thinking",
  "Resilience",
];

function Skills() {
  return (
    <>
      <section id="skills" className="container">
      <h1 className="title">Skills</h1>
        <div id="soft-skills">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
        <HardSkills />
      </section>
    </>
  );
}

export default Skills;
