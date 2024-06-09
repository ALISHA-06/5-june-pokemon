// 1
import React, { Component } from "react";
const Api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokedata extends Component {
  render() {
    const imgSrc = `${Api}${this.props.id}.png`;
    return (
      <div className="Poke-card">
        <p> {this.props.name} </p>
        <div>
          <img src={imgSrc} alt="img"></img>
        </div>
        <p>{this.props.type} </p>
        <p>{this.props.exp}</p>
      </div>
    );
  }
}
export default Pokedata;
