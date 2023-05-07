import axios from 'axios';
axios.defaults.baseURL = '';

const API_KEY = '1d78fd1734a54a82c67aadef48a71616';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const TRENDING_URL = BASE_URL + 'trending/movie/day';
  const config = {
    url: TRENDING_URL,
    params: {
      api_key: API_KEY,
    },
  };
  const fetchedData = await axios(config);
  return fetchedData.data.results;
};

export const fetchMoviesByQuery = async query => {
  const SEARCH_URL = BASE_URL + 'search/movie';
  const config = {
    url: SEARCH_URL,
    params: {
      api_key: API_KEY,
      query,
      language: 'en-US',
      include_adult: false,
    },
  };
  const fetchedData = await axios(config);
  return fetchedData.data.results;
};

export const fetchMovieDetails = async id => {
  const MOVIE_URL = `${BASE_URL}movie/${id}`;
  const config = {
    url: MOVIE_URL,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  };
  const fetchedData = await axios(config);
  return fetchedData.data;
};

export const fetchMovieCast = async id => {
  const MOVIE_URL = `${BASE_URL}movie/${id}/credits`;
  const config = {
    url: MOVIE_URL,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  };
  const fetchedData = await axios(config);
  return fetchedData.data.cast;
};

export const fetchMovieReviews = async id => {
  const MOVIE_URL = `${BASE_URL}movie/${id}/reviews`;
  const config = {
    url: MOVIE_URL,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  };
  const fetchedData = await axios(config);
  return fetchedData.data.results;
};
