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
    const placeCollums = [
      {label: 'tipo', colspan: 2},
      {label: 'quartos'},
      {label: 'garagem'},
      {label: 'escritorio'},
      {label: 'metro'},
      {label: 'trabalho'},
      {label: 'bairro'},
      {label: 'valor', colspan: 2},
      {label: 'link'}
    ];
    return (
      <div>
        <Header />
        <PlaceList places={places} placeCollums={placeCollums} />
        <PlaceForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
