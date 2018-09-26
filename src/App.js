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
        <h3 className = "headers">CHANDELIERS</h3>
        <Cards />
        <h3 className = "headers">PENDANTS</h3>
        <Cards />
        <h3 className = "headers">SCONCES</h3>
        <Cards />
        <h3 className = "headers">TABLE LAMPS</h3>
        <Cards />
        <h3 className = "headers">FLOOR LAMPS</h3>
        <Cards /> 
      </div>
    )
  }
}

export default App;