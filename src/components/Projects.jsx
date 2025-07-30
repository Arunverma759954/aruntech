const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">My Projects</h2>
        <div className="row">
          {['Ecommerce', 'Portfolio', 'Admin Panel'].map((proj, i) => (
            <div className="col-md-4 mb-4" key={i} data-aos="zoom-in">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">{proj}</h5>
                  <p className="card-text">Some details about {proj} project.</p>
                  <a href="#" className="btn btn-primary">View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects
