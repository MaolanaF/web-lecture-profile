import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
      <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            {/* Navbar Toggler */}
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
              <ul className="navbar-nav me-auto">
                {/* Logo */}
                <a className="navbar-brand" href="#">
                  <img
                    src="https://www.polban.ac.id/wp-content/uploads/2018/06/logo-polban-80.png"
                    width="45"
                    height="60"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />
                </a>
                {/* Dosen */}
                <li className="nav-item">
                  <Link to={{ pathname: `/dashboard_admin/dosen` }}>
                    <a className="nav-link" style={{ color:"black" }}>
                      Dosen
                    </a>
                  </Link>
                </li>
                {/* Mata Kuliah */}
                <li className="nav-item">
                  <Link to={{ pathname: `/dashboard_admin/mata_kuliah` }}>
                    <a className="nav-link" style={{ color:"black" }}>
                      Mata Kuliah
                    </a>
                  </Link>
                </li>
                {/* Penelitian */}
                <li className="nav-item">
                  <Link to={{ pathname: `/dashboard_admin/penelitian` }}>
                    <a className="nav-link" style={{ color:"black" }}>
                      Penelitian
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                {/* Logout */}
                <li className="nav-item">
                  <Link to={{ pathname: `/home` }}>
                    <button type="button" className="btn btn-warning" style={{ fontWeight:"500" }}>
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}
      </header>
  );  
};

export default Navbar;
