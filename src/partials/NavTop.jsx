import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import "./CSS/NavTop.css";

function NavTop() {
  const [toogleMenu, setToogleMenu] = useState(false);

  function toogleOpen() {
    setToogleMenu(true);
  }

  function toogleClose() {
    setToogleMenu(false);
  }

  if (toogleMenu) {
    return (
      <>
        <NavTop />
        <div className="menu">
          <Container fluid className="menu-close">
            <button className="toogle-menu ms-auto" onClick={toogleClose}>
              <GrClose />
            </button>
            <div className="menu-list">
              <NavLink to="/portfolio" onClick={toogleClose}>
                Beranda
              </NavLink>
              <NavLink to="/about" onClick={toogleClose}>
                Tentang
              </NavLink>
              <NavLink to="/skills" onClick={toogleClose}>
                Skill
              </NavLink>
              <NavLink to="/projects" onClick={toogleClose}>
                Proyek
              </NavLink>
              <NavLink to="/contact" onClick={toogleClose}>
                Kontak
              </NavLink>
            </div>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar className="navtop py-3" expand="lg">
        <Container fluid className="px-4">
          <Navbar.Brand className="navtop-brand">
            <Link to="/portfolio">
              Otto<i id="normal"> SP</i>.
            </Link>
          </Navbar.Brand>
          <button className="toogle-menu" onClick={toogleOpen}>
            <FaAlignRight />
          </button>
          <Nav className="navtop-list ms-auto">
            <Nav.Link className="pe-3">
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Beranda
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Tentang
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Skill
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Proyek
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Kontak
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTop;
