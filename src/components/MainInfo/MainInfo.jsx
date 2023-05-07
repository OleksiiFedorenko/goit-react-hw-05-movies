import { Container } from './MainInfo.styled';

const MainInfo = ({ data }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;
  const poster = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`;
  const posterAlt = `Poster of ${original_title}`;
  const title = `${original_title} (${release_date.slice(0, 4)})`;
  const genresString = genres.map(({ name }) => name).join(', ');

  return (
    <Container>
      <img src={poster} alt={posterAlt} width="200" height="300" />
      <div>
        <h1>{title}</h1>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresString}</p>
      </div>
    </Container>
  );
};

export default MainInfo;
