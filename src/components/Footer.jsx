const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Arun Verma. All rights reserved.</p>
        <div>
          <a href="#" className="text-white mx-2"><i className="bi bi-github"></i></a>
          <a href="#" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="text-white mx-2"><i className="bi bi-envelope-fill"></i></a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
