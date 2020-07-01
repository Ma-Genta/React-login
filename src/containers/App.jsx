import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header.jsx';
import Search from '../components/Search.jsx';
import Carousel from '../components/Carousel.jsx';
import CarouselItem from '../components/CarouselItem.jsx';
import Footer from '../components/Footer.jsx';
const App = () => (
  <div className="App">

    <Header />

    <Search />

    <Carousel title='Mi lista'>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>

    <Carousel title='Tendencias'>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>

    <Footer/>
  </div>
);

export default App;