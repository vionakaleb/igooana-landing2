import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../assets/images/carousel1.jpg';
import image2 from '../assets/images/carousel2.jpg';
import image3 from '../assets/images/carousel3.jpg';

const carouselImages = [
  {
    imageUrl: image1
  },
  {
    imageUrl: image2
  },
  {
    imageUrl: image3
  },
]

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container" style={{maxWidth: '100vw'}}>
        <Slider {...settings}>
          {carouselImages.map((image) => 
            <div>
              <img src={image.imageUrl} alt="Cat" style={{height: '60vh', width: '100vw'}}/>
            </div>
            )
          }
        </Slider>
      </div>
    );
  }
}

const Home = () => {

  return (
    <>
      <ReactSlickDemo />
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;