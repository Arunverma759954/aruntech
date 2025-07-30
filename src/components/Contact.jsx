const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">Contact Me</h2>
        <form className="row g-3" data-aos="fade-up">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-primary btn-lg">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
