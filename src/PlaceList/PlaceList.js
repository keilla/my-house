import React, { Component } from 'react';
import './PlaceList.css';
import PlaceCell from './PlaceCell';

class PlaceList extends Component {

  render() {
    const { places, placeCollums } = this.props;
    const rows = places.map((row, index) => {
      console.log(index)
      return (
        <React.Fragment>
          <PlaceCell key={`tipo-${index}`} size='-large' line={index + 2} label={row.tipo} />
          <PlaceCell key={`quartos-${index}`} line={index + 2} label={row.quartos} />
          <PlaceCell key={`garagem-${index}`} line={index + 2} label={row.garagem} />
          <PlaceCell key={`escritorio-${index}`} line={index + 2} label={row.escritorio} />
          <PlaceCell key={`metro-${index}`} line={index + 2} label={row.metro} />
          <PlaceCell key={`trabalho-${index}`} line={index + 2} label={row.trabalho} />
          <PlaceCell key={`bairro-${index}`} line={index + 2} label={row.bairro} />
          <PlaceCell key={`valor-${index}`} size='-large' line={index + 2} label={row.valor} />
          <div className='cell' style={{ order: index + 2 }}><a href={row.link} target='blank'>Visualizar</a></div>
        </React.Fragment>
      );
    });

    const collums = placeCollums.map((collum, index) => {
      const size = collum.colspan === 2 ? '-large' : '';
      return (
        <PlaceCell key={index} size={size} line={1} label={collum.label} />
      );
    });

    return (
      <div className='place-list' >
        {collums}
        {rows}
      </div>
    );
  }

}

export default PlaceList;
