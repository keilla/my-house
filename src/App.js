import React, { Component } from 'react';
import Header from './Header/Header';
import PlaceForm from './PlaceForm/PlaceForm';
import PlaceList from './PlaceList/PlaceList';
import './App.css';

class App extends Component {
  state = {
    places: [
    ]
  }

  handleSubmit = place => {
    this.setState({ places: [...this.state.places, place] });
  }

  //removePlace()

  render() {
    //List of labels
    const { places } = this.state;
    return (
      <div>
        <Header />
        <PlaceList places={places} />
        <PlaceForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
