
const ShowPeople = ({dataState}) => {
    const {name, height, hair_color, birth_year, homeworld} = dataState;
    
    return(
            <div className='information'>
                <h2>Show Character</h2>
                <h3>{name}</h3>
                <p>Height: {height}</p>
                <p>Hair Color: {hair_color}</p>
                <p>Birth Year: {birth_year}</p>
                <p>World: {homeworld}</p> 
            </div>
    );
}

export default ShowPeople;