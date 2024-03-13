import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import navlogo from "./IMG_20240305_133334_760.png";

export default function Nav() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.bg}`}>
        <div class="container">
          <Link class="navbar-brand" to="#">
            <img src={navlogo} className={styles.imgwdth} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="f-r-reverse collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/figureOne">
                  Figure One
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/figureTwo">
                  Figure Two
                </Link>
              </li>

              <li class="nav-item">
                <Link                                                                                                                                                                                  b class="nav-link" to="/figureThree">
                  Figure Three
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
