// @ts-ignore

import {API_KEY} from 'react-native-dotenv';

// const API_KEY = "e76eec2b6f322d44e405ba39579478a1";

export const baseImagePath = (size:string, path:string)=>{
    return `https://image.tmdb.org/t/p/${size}${path}`
}

export const nowPlaying: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
export const topRatedMovies: string = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

export const searchMovie = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`;
};

export const movieDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
};

export const movieCastDetails = (id:number)=>{
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
}