import React, {Component} from 'react';
import NavBar from './components/NavBar';
import CarouselPic from './components/CarouselPic';
import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar /> 
        <CarouselPic /> 
        <Cards /> 
      </div>
    )
  }
}

export default App;