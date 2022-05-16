import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import cryptoHive from "../../assets/cryptoHive.gif";

export const MyPortfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 6000 });
  }, []);

  return (
    <>
      <div className="main-portfolio headding" id="Potfolio">
        <Container>
          <div className="portfolio">
            <h1 className="text-center port-title">My portfolio</h1>
            <div className="photo-item flex-column justify-content-center align-items-center">
              <span style={{ color: "#fff", marginBottom: "20px" }}>
                Crypto Hive
              </span>
              <a href="https://elegant-galileo-fd1919.netlify.app/">
                <img
                  src={cryptoHive}
                  alt=""
                  data-aos="fade-in"
                  data-aos-duration="3000"
                  className="img-fluid mx-auto portfolooimgeffect"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyPortfolio;
