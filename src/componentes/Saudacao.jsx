import React, { Component } from 'react';

export default class Saudacao extends Component {

  state = {
    tipo: this.props.tipo,
    nome: this.props.nome,
    // tipo: "Fala",
    // nome: "Pedro"
  }

  constructor(props) {
    super(props)

    this.setTipo = this.setTipo.bind(this)
    // this.setNome = this.setNome.bind(this)
  }

  setTipo(e) {
    // this.props.tipo = e.target.value;
    this.setState({ tipo: e.target.value })
    // console.log(e.target.value);
    console.log(this.state);
  }

  setNome(e) {
    this.setState({ nome: e.target.value })
  }

  render() {
    const { tipo, nome } = this.state
    // const { tipo, nome } = this.props // nessa cirscunstancia pegaria da props do outro componente;
    return (
      <div>
        <h1>{tipo} {nome}!</h1>
        <hr />
        <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
        <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
      </div>
    )

  }
}