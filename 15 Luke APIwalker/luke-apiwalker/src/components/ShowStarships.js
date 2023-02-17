

const ShowStarships = ({dataState}) => {
    const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables} = dataState;
    return(
        <div>
            <h2>Show Starships</h2>
            <h3>{name}</h3>
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Cost in Credits: {cost_in_credits}</p>
            <p>Length: {length}</p>
            <p>Max Atmosphering Speed: {max_atmosphering_speed}</p>
            <p>Crew: {crew}</p>
            <p>Passengers: {passengers}</p>
            <p>Cargo Capacity: {cargo_capacity}</p>
            <p>Consumables: {consumables}</p>
        </div>
    );
}

export default ShowStarships;