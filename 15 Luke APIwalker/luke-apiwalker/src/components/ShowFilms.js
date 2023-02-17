
const ShowFilms = ({dataState}) => {
    const {title, episode_id, opening_crawl, director, producer, release_date} = dataState;
    return(
        <div>
            <h2>Show Films</h2>
            <h3>{title}</h3>
            <p>Episode: {episode_id}</p>
            <p>Opening Crawl: "{opening_crawl}"</p>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
            <p>Release Date: {release_date}</p>
        </div>
    );
}

export default ShowFilms;