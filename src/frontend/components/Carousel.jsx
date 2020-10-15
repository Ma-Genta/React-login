import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children, title }) => {
  return (
    <div>
      <h3 className="categories__title">{title}</h3>
      <section className="carousel">
        <div className="carousel__container">{children}</div>
      </section>
    </div>
  );
};

export default Carousel;