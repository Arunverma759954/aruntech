import React from "react";

const services = [
  {
    title: "Web Development",
    icon: "bi-code-slash",
    description: "Building responsive and scalable websites using modern tech like React, Vite, and Bootstrap."
  },
  {
    title: "UI/UX Design",
    icon: "bi-palette",
    description: "Designing clean and intuitive user interfaces for better user experience and engagement."
  },
  {
    title: "Performance Optimization",
    icon: "bi-speedometer2",
    description: "Improving site speed and responsiveness through best practices and tools."
  },
  {
    title: "SEO Integration",
    icon: "bi-graph-up",
    description: "Optimizing websites for search engines with semantic markup and meta tags."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
              <div className="card h-300 shadow-sm text-center p-3 border-0">
                <i className={`bi ${service.icon} fs-1 text-primary mb-3`}></i>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
