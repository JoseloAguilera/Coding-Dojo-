const ShowPlanets = ({dataState}) => {
    const {name, rotation_period, orbital_period, diameter, climate} = dataState;
    return(
        <div>
            <h2>Show Planets</h2>
            <h2>{name}</h2>
            <p>Rotation Period: {rotation_period}</p>
            <p>Orbital Period: {orbital_period}</p>
            <p>Diameter: {diameter}</p>
            <p>Climate: {climate}</p>
        </div>
    );
}

export default ShowPlanets;