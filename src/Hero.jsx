import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quae deserunt repellendus exercitationem labore vel sint debitis aut, laudantium eum maiores distinctio laboriosam quaerat magnam temporibus illum quas saepe
            aliquam.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
