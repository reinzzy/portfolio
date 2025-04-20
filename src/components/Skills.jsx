import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './CSS/Skills.css';

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Otto SP - Skill</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skill</h3>
          <h4>
            ───&nbsp;&nbsp;Halaman <strong>03</strong>
          </h4>
        </div>
        <div className="skills-right">
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-html5-plain-wordmark colored"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain-wordmark colored"
                title="CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored"
                title="JavaScript"
              ></i>
              <i className="devicon-php-plain colored" title="PHP"></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-dart-plain colored"
                title="Dart"
              ></i>

              <i
                className="devicon-bootstrap-plain-wordmark colored"
                title="Bootstrap"
              ></i>
              <i
                className="devicon-react-original-wordmark colored"
                title="React JS"
              ></i>
              <i
                className="devicon-mysql-plain-wordmark colored"
                title="MySQL"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-flutter-plain colored"
                title="Flutter"
              ></i>
              <i
                className="devicon-laravel-plain-wordmark colored"
                title="Laravel"
              ></i>
              <i
                className="devicon-python-plain-wordmark colored"
                title="Python"
              ></i>
              <i
                class="devicon-firebase-plain-wordmark colored"
                title="Firebase"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i className="devicon-wordpress-plain colored" title="Wordpress"></i>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
