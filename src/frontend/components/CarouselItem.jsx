import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postFavorite, dropFavorite } from '../actions/index';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import { Link } from 'react-router-dom';

const CarouselItem = (props) => {
  const {
    id,
    cover,
    title,
    year,
    contentRating,
    duration,
    isList,
    _id,
    user,
    myList,
  } = props;
  const handleSetFavorite = () => {
    const exist = myList.find((item) => item.id === id);
    if (!exist) {
      const movie = {
        id,
        cover,
        title,
        year,
        contentRating,
        duration,
        _id,
      };
      const userId = user.id;

      props.postFavorite(userId, _id, movie);
    }
  };

  const handleDeleteFavorite = (itemId) => {
    props.dropFavorite(_id, itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${_id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>

          {isList ? (
            <img
              className="carousel-item__details--img"
              alt="Remove Icon"
              src={removeIcon}
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    user: state.user,
  };
};

const mapsDispatchToProps = {
  postFavorite,
  dropFavorite,
};

//export default CarouselItem;
export default connect(mapStateToProps, mapsDispatchToProps)(CarouselItem);
