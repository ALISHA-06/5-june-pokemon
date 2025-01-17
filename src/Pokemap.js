// 2
import React, { Component } from "react";
import Pokedata from "./Poke1";

class Pokemap extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmender ", type: "fire", base_experience: 62 },
      { id: 7, name: " Squirtle", type: "water", base_experience: 53 },
      { id: 11, name: "Metapod ", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree ", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu ", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff ", type: "normal", base_experience: 95 },
    ],
  };
  render() {
    return (
      <div className="Poke-map">
        <h1>{this.props.exp}</h1>
        <h2>{this.props.isWinner ? "winner" : "loser"}</h2>
        <div className="card">
          {this.props.pokemon.map((p) => (
            <Pokedata
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokemap;
