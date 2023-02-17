const FetchPkm = ({pkmns, setPkmns}) => {

    function fetchPkmn() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => {
                setPkmns(response.results.map(pkmn => pkmn.name));
                
            })
    }

    return (
        <button className="fetchButton" onClick={fetchPkmn}>Fetch Pokemon</button>
    );
}
export default FetchPkm;