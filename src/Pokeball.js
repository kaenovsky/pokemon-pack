import "./Pokeball.css";

export default function Pokeball() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div id="pokeball" onClick={refreshPage}></div>
    );
}