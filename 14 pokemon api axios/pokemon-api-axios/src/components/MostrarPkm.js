const MostrarPkm = ( { pkmns } ) => {
    return (
        <>
            <h2>Lista de Pokemons</h2>
            <ul className="lista"> 
                {
                    pkmns.map((pkmn, i) => {
                        return <li key={i}>{pkmn}</li>
                    })
                }
            </ul>
        </>
        
    );
}

export default MostrarPkm;