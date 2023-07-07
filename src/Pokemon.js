import "./Pokemon.css";

const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function Pokemon() {
    const randomNum = Math.floor(Math.random() * 151) + 1;
    return (
      <>
        <h2 className="pokemonNum">Pokemon #{randomNum}</h2>
        <img src={baseUrl + randomNum + '.png'} alt="pokemon" />
      </>
    );
  }
  