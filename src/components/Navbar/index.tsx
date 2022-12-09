import { Link } from "react-router-dom";

import NavItem from "./NavItem";

import "./index.css";

export default function Navbar() {
  return (
    <nav className="align-items-center navbar navbar-dark navbar-expand-lg top-0 px-5" id="navbar">
      <div className="container-fluid gap-2">
        <div className="align-items-center d-flex flex-grow-1 gap-3 gap-md-4 navbar-uncollapsable">
          <Link className="fs-1 me-0 navbar-brand p-0" to="/">
            Synaptic Learn
          </Link>
          <button
            className="ms-auto navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            title="Toggle Navbar"
            type="button"
          >
            <i className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse flex-grow-0 mb-4 mb-lg-0 navbar-collapse" id="navbar-toggler">
          <ul className="mb-2 mb-lg-0 me-4 ms-1 ms-lg-4 navbar-nav">
            <NavItem to="/">Stream</NavItem>
            <NavItem to="/lessons">Lessons</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}
