import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return(
    <div>
      <h2>I like { name }</h2>
      <h4>{rating}/10.0</h4>
      <img src={picture} alt={name} />
    </div>
  );

}

const foodILike = [
  {
    id: 1,
    name: 'hyojin',
    image:'http://on7off.com/4thmini/img/gallery/gallery_hyojin.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'J-us',
    image: 'http://on7off.com/4thmini/img/gallery/gallery_jus.png',
    rating: 6,
  },
  {
    id: 3,
    name: 'etion',
    image: 'http://on7off.com/4thmini/img/gallery/gallery_etion.png',
    rating: 7,
  },
  {
    id: 4,
    name: 'jaeyoung',
    image: 'http://on7off.com/4thmini/img/gallery/gallery_wyatt.png',
    rating: 8,
  },
  {
    id: 5,
    name: 'mingyun',
    image: 'http://on7off.com/4thmini/img/gallery/gallery_mk.png',
    rating: 5,
  },
];


function App() {
  return(
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>

  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
