import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal"; 

import './assets/css/animate.css';
import './assets/css/lineicons.css';
import './assets/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/style.css';

import './assets/images/favicon.png';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const mainDescription =
    "IGOOANA adalah sebuah platform digital yang dapat dikembangkan menjadi sebuah ekosistem yang sustainable.";

  return (
    <section {...props} className={outerClasses}>
      <div id="home" class="header-hero bg_cover d-lg-flex align-items-center">
            
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
            <div class="shape shape-6"></div>
            <div class="header-shape-1"></div>
            <div class="header-shape-2"></div>
            
            <div class="container">
              <div className="container-sm">
                <div className={innerClasses}>
                  <div className="hero-content">
                    <div className="container-xs">
                      <p
                        className="m-0 mb-3 reveal-from-bottom"
                        data-reveal-delay="400"
                      >
                        {mainDescription}
                      </p>
                      <div className="reveal-from-bottom" data-reveal-delay="600">
                        <ButtonGroup>
                          <a href="http://igooana.id:8080/login" target="_blank" rel="noopener noreferrer">
                            <Button tag="a" color="primary" wideMobile>
                              Visit IGOOANA
                            </Button>
                          </a>
                          <Button tag="a" color="dark" wideMobile href="">
                            See Details
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-figure reveal-from-bottom illustration-element-01"
                    data-reveal-value="20px"
                    data-reveal-delay="800"
                  >
                    <a
                      data-video="https://www.youtube.com/embed/mOE6dheCpuM"
                      href="#0"
                      aria-controls="video-modal"
                      onClick={openModal}
                    >
                      <img
                        src={require("../../assets/images/video-icon.png")}
                        alt="Play"
                        style={{
                          position: "absolute",
                          zIndex: "99",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "100px",
                          filter: "opacity(0.5)",
                        }}
                      />
                      <Image
                        className="has-shadow"
                        src={require("./../../assets/images/video-placeholder.jpg")}
                        alt="Hero"
                        width={800}
                        height={500}
                        style={{ filter: "brightness(60%)" }}
                      />
                    </a>
                  </div>
                  <Modal
                    id="video-modal"
                    show={videoModalActive}
                    handleClose={closeModal}
                    video="https://www.youtube.com/embed/mOE6dheCpuM"
                    videoTag="iframe"
                  />
                </div>
              </div>
            </div>
        </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
