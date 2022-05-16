import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import bannerbackground from "../../../assets/bannerbackground.mp4";

const HeaderBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <>
      <div id="Home">
        <div className="banner-img">
          <span className=" ">
            <div className="">
              <video
                autoPlay
                loop
                muted
                id="video"
                className=" img-fluid  mx-auto width: 100% "
              >
                <source src={bannerbackground} type="video/mp4" />
              </video>
            </div>
          </span>
          <div className="img-bnr-text ">
            <div>
              <h5
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="50"
              >
                Frontend Software Engineer
              </h5>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Seymour James
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Hi there! 👋 I am Seymour and welcome the my Portfolio.
                <br />
                I am excited to have you here. Go ahead have a look around
                <br />
                talk to you soon...
              </p>
              <button
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
                className="BtnView"
              >
                <a href="#Contact">VIEW MORE</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
