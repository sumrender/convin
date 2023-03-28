function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              //   style="margin-top: -1px;"
            />
          </a> */}

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Convix
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary me-3">
                Create
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Home;
