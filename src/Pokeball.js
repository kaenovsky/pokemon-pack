import "./Pokeball.css";
import { useState } from "react";
import PokemonPack from "./PokemonPack";

export default function Pokeball() {

    const [state, setState] = useState();
    
    const refreshPage = () => {
        setState({});
    }

    return (
        <>
            <div id="pokeball" onClick={refreshPage}></div>
            <div className="container">
                <PokemonPack amount={6} />
            </div>
        </>
    );
}