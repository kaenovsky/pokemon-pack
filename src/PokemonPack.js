import Pokemon from "./Pokemon";

export default function PokemonPack({ amount=6 }) {


    const pokemons = [];
   
    for (let i = 0; i < amount; i++) {
        pokemons.push(<Pokemon />);
    }

    return pokemons;

}