function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "SQL",
    "Excel",
    "Power BI"
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
