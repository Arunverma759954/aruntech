const Skills = () => {
  const skills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 85 },
    { name: 'JavaScript', percent: 80 },
    { name: 'React', percent: 75 },
  ]
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 mt-5" data-aos="fade-up">My Skills</h2>
        {skills.map((skill, i) => (
          <div className="mb-3" data-aos="fade-right">
            <label className="form-label fw-bold">{skill.name}</label>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${skill.percent}%` }}
              >
                {skill.percent}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Skills
