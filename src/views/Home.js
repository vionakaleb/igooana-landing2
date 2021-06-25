import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import image1 from '../assets/images/carousel1.jpg';
import image2 from '../assets/images/carousel2.jpg';
import image3 from '../assets/images/carousel3.jpg';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "normalize.css/normalize.css";
import "../assets/scss/slider-animations.css";
import "../assets/scss/slider-styles.css";

import "../assets/scss/particles-styles.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  [theme.breakpoints.down("xs")]: {
    width: '80vw'
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: '40vw'
  },
  "@media (min-width: 1280px)": {
    width: '40vw'
  }
}));

const Home = () => {
  const classes = useStyles();
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);

  const handleModal1 = () => {
    setModal1(!modal1);
  };

  const handleModal2 = () => {
    setModal2(!modal2);
  };

  const handleModal3 = () => {
    setModal3(!modal3);
  };

  const slides = [
    {
      title: "Simply and Simplify",
      description:
        "IGOOANA dirancang sebagai solusi yang dapat memberikan manfaat bagi mitra kerja untuk mempermudah serta mempercepat proses monitoring dan control project di lapangan.",
      button: "See More",
      image: image1,
      link: "http://igooana.id:8080/select-project",
      modal: modal1,
      handler: handleModal1
    },
    {
      title: "Visi",
      description:
        "Visi Igooana adalah sebagai perusahaan teknologi karya anak bangsa berskala internasional yang solutif bagi pengembangan bisnis para mitra kerja dan juga sebagai pelopor (Pioneer) untuk aplikasi mobile berbasis data collection.",
      button: "See More",
      image: image2,
      link: "https://www.indonesia5.com/",
      modal: modal2,
      handler: handleModal2
    },
    {
      title: "Misi",
      description:
        "Dengan Misi mengutamakan kepuasan pelanggan, serta terus melakukan inovasi dan juga adaptive dalam menyesuaikan perkembangan teknologi bisnis yang lebih advance melalui pengembangan teknologi melalui produk digital, seperti: Market business analysis, distribusi-logistik, warehouse management, dan HR management.",
      button: "See More",
      image: image3,
      link: "https://www.indonesia5.com/",
      modal: modal3,
      handler: handleModal3
    }
  ];

  return (
    <>
      <Slider className="slider-wrapper" style={{zIndex: 90}}>
        {slides.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
                style={{textAlign: '-webkit-center'}}
              >
                <img
                  className="mt-5 mb-3"
                  alt="IGOOANA"
                  src={require("../assets/images/igooana_logo.png")}
                />
              </h1>
              <h3 className="mb-3">{item.title}</h3>
              <button onClick={item.handler}>{item.button}</button>
            </div>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={item.modal}
              onClose={item.handler}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
            <Fade in={item.modal}>
              <div className={classes.paper}>
                <p id="transition-modal-description">{item.description}</p>
              </div>
            </Fade>
          </Modal>

          </div>
        ))}
      </Slider>
      <Hero id="section1" className="illustration-section-01" style={{zIndex: 90}} />
      <FeaturesTiles id="section2" background="red" style={{zIndex: 90}} />
      <FeaturesSplit id="section3" invertMobile topDivider imageFill className="illustration-section-02" style={{zIndex: 90}} />
      <Testimonial id="section4" topDivider style={{zIndex: 90}} />
      <Cta id="contact" split style={{zIndex: 90}} />

      <div class="container-bg">
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
          <div class="circle-container">
              <div class="circle"></div>
          </div>
      </div>
    </>
  );
}

export default Home;