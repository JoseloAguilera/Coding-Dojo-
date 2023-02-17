
import axios from 'axios';

    const FetchPkm = ({ setPkmns }) => {
        const fetchPkmn = () => {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
                .then(response => {
                    const pkmn = response.data.results.map(pkmn => pkmn.name);
                    setPkmns(pkmn);
                    }
                )
                    
        }
    

    return (
        <button className="fetchButton" onClick={fetchPkmn}>Fetch Pokemon</button>
    );

}


export default FetchPkm;