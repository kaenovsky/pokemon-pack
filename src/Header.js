import "./Header.css";
import logo from "./pokemon-logo.png";
import Pokeball from "./Pokeball";

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="pokemon logo" />
            <Pokeball />
        </div>
    );
}