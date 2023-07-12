import "./Pokemon.css";

export default function Pokemon() {
    
  const randomNum = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`;
  const isPikachu = randomNum === 25;
  const goldenBox = {backgroundColor: isPikachu ? "gold" : "#fff"};
    
    return (
      <div className="Box" style={goldenBox}>
        <h2 className="pokemonNum">Pokémon #{randomNum}</h2>
        <img src={url} alt="pokemon" />
      </div>
    );
  }