import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

import image1 from '../assets/images/carousel1.jpg';
import image2 from '../assets/images/carousel2.jpg';
import image3 from '../assets/images/carousel3.jpg';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "normalize.css/normalize.css";
import "../assets/scss/slider-animations.css";
import "../assets/scss/slider-styles.css";

const slides = [
  {
    title: "SIMPLY AND SIMPLIFY",
    description:
      "IGOOANA dirancang sebagai solusi yang dapat memberikan manfaat bagi mitra kerja untuk mempermudah serta mempercepat proses monitoring dan control project di lapangan.",
    button: "Go to Website",
    image: image1,
    link: "http://igooana.id:8080/select-project"
  },
  {
    title: "VISI",
    description:
      "Visi Igooana adalah sebagai perusahaan teknologi karya anak bangsa berskala internasional yang solutif bagi pengembangan bisnis para mitra kerja dan juga sebagai pelopor (Pioneer) untuk aplikasi mobile berbasis data collection.",
    button: "See More",
    image: image2,
    link: "https://www.indonesia5.com/"
  },
  {
    title: "MISI",
    description:
      "Dengan Misi mengutamakan kepuasan pelanggan, serta terus melakukan inovasi dan juga adaptive dalam menyesuaikan perkembangan teknologi bisnis yang lebih advance melalui pengembangan teknologi melalui produk digital, seperti: Market business analysis, distribusi-logistik, warehouse management, dan HR management.",
    button: "See More",
    image: image3,
    link: "https://www.indonesia5.com/"
  }
];

class ReactSlider extends React.Component {
  render() {
    return (
      <Slider className="slider-wrapper">
      {slides.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>{item.button}</button>
            </a>
          </div>
        </div>
      ))}
    </Slider>
    );
  }
}

const Home = () => {
  return (
    <>
      <ReactSlider id="carousel" />
      <Hero id="section1" className="illustration-section-01" />
      <FeaturesTiles id="section2" />
      <FeaturesSplit id="section3" invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial id="section4" topDivider />
      <Cta id="contact" split />
    </>
  );
}

export default Home;