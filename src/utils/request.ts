import { MovieDetail, TMDBResult } from "../interfaces/movies.interface";

export const request = async (url: string) => {
  const rawResult = await fetch(url);
  if (rawResult.status < 200 || rawResult.status >= 400) {
    return null;
  }
  try {
    return await rawResult.json();
  } catch (_err) {
    return {};
  }
};

export const getPopular = async (): Promise<TMDBResult> =>
  request(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);

export const searchMovie = async (search: string): Promise<TMDBResult> =>
  request(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.REACT_APP_API_KEY}`
  );

export const getMovieDetails = async (movieId: string): Promise<MovieDetail> =>
  request(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  );
