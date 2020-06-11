import React from 'react';



class App extends React.Component{

  state = {
    isLoading: true,
    movies: [],
  }

  componentDidMount(){
    // 영화 데이터 로딩!
    setTimeout( () => {
      this.setState({ isLoading: false});
    }, 6000);
  }


  render(){
    const { isLoading } = this.state;
    return <div> {isLoading ? 'Loading ... ' : 'We are ready' } </div>;
  }



//----------------------------------------------------------


//   componentDidMount(){
//     console.log('component rendered');
//   }

//   componentDidUpdate(){
//     console.log('i just updated')
//   }

//   componentWillUnmount(){
//     console.log('goodbye, world');
//   }

//   constructor(props){
//     super(props);
//     console.log('hello')
//   }


//   state = {
//     count: 0,
//   }

//   add = () => {
//     this.setState(current => ({
//       count: current.count + 1,
//     }));
//   }

//   minus = () => {
//     this.setState(current => ({
//       count: current.count - 1,
//     }));
//   }


//   render(){
//     console.log('rendering');
//     return (
//       <div>
//         <h1> The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )

//   }


//-------------------------------------------------------



// import PropTypes from 'prop-types';

// function Food({name, picture, rating}){
//   return(
//     <div>
//       <h2>I like { name }</h2>
//       <h4>{rating}/10.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );

// }

// const foodILike = [
//   {
//     id: 1,
//     name: 'hyojin',
//     image:'http://on7off.com/4thmini/img/gallery/gallery_hyojin.png',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'J-us',
//     image: 'http://on7off.com/4thmini/img/gallery/gallery_jus.png',
//     rating: 6,
//   },
//   {
//     id: 3,
//     name: 'etion',
//     image: 'http://on7off.com/4thmini/img/gallery/gallery_etion.png',
//     rating: 7,
//   },
//   {
//     id: 4,
//     name: 'jaeyoung',
//     image: 'http://on7off.com/4thmini/img/gallery/gallery_wyatt.png',
//     rating: 8,
//   },
//   {
//     id: 5,
//     name: 'mingyun',
//     image: 'http://on7off.com/4thmini/img/gallery/gallery_mk.png',
//     rating: 5,
//   },
// ];


// function App() {
//   return(
//     <div>
//       {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//     </div>

//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number,
// };
}
export default App;
