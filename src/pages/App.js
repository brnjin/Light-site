import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import CarouselPic from '../components/CarouselPic';
import ItemList from './ItemList';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar /> 
        <CarouselPic /> 
        <ItemList />
      </div>
    )
  }
}

export default App;