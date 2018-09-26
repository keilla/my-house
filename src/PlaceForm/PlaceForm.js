import React, { Component } from 'react';
import './PlaceForm.css';
import Button from '../Button/Button';

class PlaceForm extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      tipo: 'apartamento',
      quartos: '',
      garagem: '',
      escritorio: 'sim',
      metro: '',
      trabalho: '',
      bairro: '',
      valor: '',
      link: ''
    }
    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { tipo, quartos, garagem, escritorio, metro, trabalho, bairro, valor, link } = this.state;

    return (
      <form className='collumn-form' onSubmit={this.handleSubmit}>
        <div className='field'>
          <label>Tipo</label>
          <select
            name='tipo'
            value={tipo}
            onChange={this.handleChange}
          >
            <option>apartamento</option>
            <option>casa</option>
          </select>
        </div>
        <div className='field'>
          <label>Quartos</label>
          <input className='-small'
            name='quartos'
            value={quartos}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className='field'>
          <label>Garagem</label>
          <input className='-small'
            name='garagem'
            value={garagem}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className='field'>
          <label>Escritório</label>
          <select className='-small'
            name='escritorio'
            value={escritorio}
            onChange={this.handleChange}
          >
            <option>sim</option>
            <option>não</option>
          </select>
        </div>
        <div className='field'>
          <label>Metrô</label>
          <input className='-small'
            name='metro'
            value={metro}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className='field'>
          <label>Trabalho</label>
          <input className='-small'
            name='trabalho'
            value={trabalho}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className='field'>
          <label>Bairro</label>
          <input
            name='bairro'
            value={bairro}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className='field'>
          <label>Valor</label>
          <input
            name='valor'
            value={valor}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className='field -full'>
          <label>Link</label>
          <input
            className='-large'
            name='link'
            value={link}
            onChange={this.handleChange}
          >
          </input>
        </div>
        <div className='button-list'>
          {/* <Button label='salvar' /> */}
          <input
            type="button"
            value="Submit"
            onClick={this.submitForm} />
        </div>
      </form>
    );
  }

}

export default PlaceForm;
