import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsEnvelope, BsLinkedin, BsGithub } from "react-icons/bs";
import axios from "axios";
import "./footerStyles.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/contact_me", {
      name: name,
      subject: subject,
      phone: phone,
      email: email,
      message: message,
    });
    setName("");
    setSubject("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <footer className="footer headding" id="Contact">
        <div className="footer-head">
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <div className="f-left">
                  <div className="f-content">
                    <h1 className="F-contact">Contact Me</h1>
                    <h1 className="f-text">Let's Discuss Your project</h1>
                  </div>
                  <div className="">
                    <h6 className="f-icon">
                      <i className="icon">
                        <BsLinkedin size={20} />
                      </i>
                      <span>linkedin.com/in/seymour-james-sr</span>
                    </h6>
                    <h6 className="f-icon">
                      <i className="icon">
                        <BsEnvelope size={20} />
                      </i>
                      <span>seymourpjames@gmail.com</span>
                    </h6>
                    <h6 className="f-icon">
                      <i className="icon">
                        <BsGithub size={20} />
                      </i>
                      <span>github.com/jamespure</span>
                    </h6>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} className="f-end">
                <Row>
                  <Col xl={12} md={12} lg={12} sm={12}>
                    <div>
                      <form
                        onSubmit={handleSubmit}
                        action="submit"
                        className="row g-3 needs-validation formContactus"
                      >
                        <div className="col-md-6  col-sm-6 col-6">
                          <input
                            type="text"
                            className="form-control inputbox "
                            id="validationCustom01"
                            placeholder="Name"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                          />
                        </div>
                        <div className="col-md-6  col-sm-6 col-6">
                          <input
                            type="text"
                            className="form-control inputbox"
                            id="validationCustom01"
                            placeholder="Phone"
                            required
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                          <input
                            type="text"
                            className="form-control inputbox"
                            id="validationCustom02"
                            placeholder="E-mail"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                          <input
                            type="text"
                            className="form-control inputbox "
                            id="validationCustom01"
                            placeholder="Subject"
                            required
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                          />
                        </div>

                        <div className="col-md-12">
                          <textarea
                            type="text"
                            className="form-control inputboxmessage inputbox"
                            id="validationCustom03"
                            placeholder="Meassage*"
                            required
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                          />
                          <div className="invalid-feedback">
                            Please provide a Send Meassage.
                          </div>
                        </div>

                        <div className="col-12 ">
                          <button
                            type="submit"
                            className="send-btn button float-start"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
      <div className="f-link">Copyright © 2022. All Rights Reserved.</div>
    </>
  );
};

export default Footer;
