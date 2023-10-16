import React from "react";

const Navbar = () => {
  return (
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-warning"
                  href="/login"
                  role="button"
                >
                Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}
      {/* Background image */}
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            'url("https://kuliah-sabtu-minggu.com/wp-content/uploads/2023/02/download-2-1-777x437.jpg")',
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Politeknik Negeri Bandung</h1>
              <h4 className="mb-3">Profil Dosen</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Background image */}
    </header>
  );
};

export default Navbar;
