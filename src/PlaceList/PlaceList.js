import React, { Component } from 'react';
import './PlaceList.css';

class PlaceList extends Component {

  render() {
    const { places } = this.props;

    const rows = places.map((row, index) => {
      return (
        <React.Fragment>
          <div className='cell -large' style={{ order: index+2 }}>{row.tipo}</div>
          <div className='cell' style={{ order: index+2 }}>{row.quartos}</div>
          <div className='cell' style={{ order: index+2 }}>{row.garagem}</div>
          <div className='cell' style={{ order: index+2 }}>{row.escritorio}</div>
          <div className='cell' style={{ order: index+2 }}>{row.metro}</div>
          <div className='cell' style={{ order: index+2 }}>{row.trabalho}</div>
          <div className='cell' style={{ order: index+2 }}>{row.bairro}</div>
          <div className='cell -large' style={{ order: index+2 }}>{row.valor}</div>
          <div className='cell' style={{ order: index+2 }}><a href={row.link}>Visualizar</a></div>
        </React.Fragment>
      );
    });


    return (
      <div className='place-list'>
        <div className='cell -large' style={{ order: 1 }}>Tipo</div>
        <div className='cell' style={{ order: 1 }}>Quartos</div>
        <div className='cell' style={{ order: 1 }}>Garagem</div>
        <div className='cell' style={{ order: 1 }}>Escritório</div>
        <div className='cell' style={{ order: 1 }}>Metrô</div>
        <div className='cell' style={{ order: 1 }}>Trabalho</div>
        <div className='cell' style={{ order: 1 }}>Bairro</div>
        <div className='cell -large' style={{ order: 1 }}>Valor</div>
        <div className='cell' style={{ order: 1 }}></div>
        {rows}
      </div>
    );
  }

}

export default PlaceList;
