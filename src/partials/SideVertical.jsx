import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./CSS/SideVertical.css";

function SideVertical(props) {
  var numberPage;
  var titlePage;
  var directUp;
  var directDown;
  const { pathname } = useLocation();
  const date = new Date().toISOString().slice(0, 10);

  switch (pathname) {
    case "/portfolio":
      numberPage = "01";
      titlePage = "Beranda";
      break;
    case "/about":
      numberPage = "02";
      titlePage = "Tentang";
      break;
    case "/skills":
      numberPage = "03";
      titlePage = "Skill";
      break;
    case "/projects":
      numberPage = "04";
      titlePage = "Proyek";
      break;
    case "/contact":
      numberPage = "05";
      titlePage = "Kontak";
      break;
    default:
  }

  // Direct Up
  switch (pathname) {
    case "/portfolio":
      directUp = "/contact";
      break;
    case "/about":
      directUp = "/portfolio";
      break;
    case "/skills":
      directUp = "/about";
      break;
    case "/projects":
      directUp = "/skills";
      break;
    case "/contact":
      directUp = "/projects";
      break;
    default:
  }

  // Direct Down
  switch (pathname) {
    case "/portfolio":
      directDown = "/about";
      break;
    case "/about":
      directDown = "/skills";
      break;
    case "/skills":
      directDown = "/projects";
      break;
    case "/projects":
      directDown = "/contact";
      break;
    case "/contact":
      directDown = "/portfolio";
      break;
    default:
  }

  return (
    <>
      <div className="side-vertical">
        <div className="upper-side d-flex">
          <p className="side-title">{titlePage}</p>
          <p className="side-date">{date}</p>
        </div>
        <div className="lower-side d-flex">
          <p className="side-number">
            {numberPage} <span className="disabled-color">/ 05</span>
          </p>
          <Link to={directUp} className="d-flex align-items-center pb-3 arrow">
            <AiOutlineArrowUp />
          </Link>
          <Link to={directDown} className="d-flex align-items-center arrow">
            <AiOutlineArrowDown />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideVertical;
