import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../components/Search.jsx';
import Carousel from '../components/Carousel.jsx';
import CarouselItem from '../components/CarouselItem.jsx';

//import useInitialState from '../hooks/useInitialState'; inicio de estado por medio de Hooks
const Home = ({ myList, trends, originals }) => {
  //const videos = useInitialState('http://localhost:3000/initalState'); estado por medio de Hooks
  return (
    <>
      <Search />
      {myList.length > 0 && ( //Validacion para mostrar o no un elemento
        <Carousel title="Mi lista">
          {myList.map((item) => (
            <CarouselItem key={item.id} {...item} 
              isList
            />
          ))}
        </Carousel>
      )}
      <Carousel title="Tendencias">
        {trends.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
      <br></br>
      <Carousel title="Originals">
        {originals.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

//export default Home; //No conectado a provider
export default connect(mapStateToProps, null)(Home); //Conectado a provider
