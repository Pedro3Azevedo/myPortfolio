const NavBar = () => {
  return (
    <>
      <nav
        id="navigationBar"
        className="navbar navbar-expand-lg navbar-dark"
      >
        <span className="name">Pedro Azevedo</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                About me
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#contactMe">
                Contact Me
              </a>
            </li>
          </ul>
          <a
            className="social"
            href="https://www.linkedin.com/in/pedro-azevedo-2b9818224/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="social" href="https://git.fhict.nl/I518205">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
