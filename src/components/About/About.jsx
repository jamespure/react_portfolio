import React, { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import waving from "../../assets/waving.png"
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container" id="About">
        <div className="about headding">
          <Row className="about-main">
            <Col md={5}>
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="about-img "
              >
                <Image
                  className="d-block img-fluid mx-auto rounded-circle"
                  src={waving}
                />
                <div className="text-center About-name">
                  <h6>Seymour James</h6>
                  <p>Frontend Software Engineer</p>
                </div>
              </div>
            </Col>
            <Col md={7} className="abouttextbox">
              <div>
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">
                  Frontend Software Engineer with a proven ability to adapt and
                  deliver robust, effective products in collaborative settings
                  under strict and tight time constraints. As a continuous
                  learner, I graduated from a 33 week full-stack web development
                  course, built 11 hands-on projects and completed 10 courses.
                </p>

                <p className="about-subtitle">
                  Demonstrated teamwork and dependability by collaborating with
                  4 technicians and providing technical assistance to Intel
                  engineers for 3 years. Responsible for 20,000 miles of
                  tracking, recording and troubleshooting physical routes to
                  Apple Maps - New York for “Look Around” feature and 3D view
                  using liDAR scanners and other GPS technology. I am looking to
                  apply my passion for technology in obtaining a challenging
                  position on a collaborative development team focused on
                  creating high-quality, intuitive front-end applications.
                </p>
              </div>
              <div className="about-psl-info">
                <h1 className="about-sub-info">Personal Info</h1>
                <Row>
                  <Col>
                    <div className="about-list">
                      <span className="perName1">Name : </span>
                      <span className="perName2">Seymour James</span>
                    </div>

                    <div className="about-list">
                      <span className="perName1">Age : </span>
                      <span className="perName2">28 Years</span>
                    </div>
                    <div className="about-list">
                      <span className="perName1">Nationality : </span>
                      <span className="perName2">Jamaican born, USA</span>
                    </div>
                  </Col>
                  <Col>
                    <div className=" about-list ">
                      <span className="perName1">Address : </span>
                      <span className="perName2"> Arizona, USA</span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">LinkedIn : </span>
                      <span className="perName2">seymour-james-sr</span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">E-mail : </span>
                      <span className="perName2">seymourpjames@gmail.com</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <button className="BtnView">Download CV</button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;
