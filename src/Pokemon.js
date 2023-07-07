import "./Pokemon.css";

export default function Pokemon() {
    
  const randomNum = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`;
    
    return (
      <div className="Box">
        <h2 className="pokemonNum">Pokemon #{randomNum}</h2>
        <img src={url} alt="pokemon" />
      </div>
    );
  }