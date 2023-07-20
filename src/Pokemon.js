import "./Pokemon.css";
import { useState } from "react";

export default function Pokemon() {

  const newPokemon = () => {
    const randomNum = Math.floor(Math.random() * 151) + 1;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`;
    const isPikachu = randomNum === 25;
    const goldenBox = {backgroundColor: isPikachu ? "gold" : "#fff"};
    return [url, goldenBox, randomNum];
  }
  
  const [pokemon, setPokemon] = useState();
  const [url, goldenBox, randomNum] = newPokemon();

  const reloadPokemon = () => {
    setPokemon(newPokemon());
  }

    return (
      <div className="Box" style={goldenBox} onClick={reloadPokemon}>
        <h2 className="pokemonNum">Pokémon #{randomNum}</h2>
        <img src={url} alt="pokemon" />
      </div>
    );
  }