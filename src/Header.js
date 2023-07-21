import "./Header.css";
import logo from "./pokemon-logo.png";

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="pokemon logo" />            
        </div>
    );
}