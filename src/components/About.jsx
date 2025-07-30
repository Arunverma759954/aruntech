const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/450x300" className="img-fluid rounded shadow" alt="Profile" />
          </div>
          <div className="col-md-6">
            <p className="lead">
              I am a passionate Frontend Developer with expertise in React, Bootstrap, and modern UI design.
              I enjoy building responsive, user-friendly websites with smooth animations and clean code.
            </p>
            <p>
              I focus on writing maintainable code, collaborating with teams, and continuously learning new tech.
              I'm currently open to opportunities where I can contribute and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
