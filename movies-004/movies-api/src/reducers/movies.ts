import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
}

interface MovieState {
  top: Movie[];
}

const initialState: MovieState = {
  top: [
    { id: 1, title: "First movies", popularity: 98, overview: "Dreams..." },
    { id: 2, title: "Second movies", popularity: 97, overview: "Dreams..." },
    { id: 3, title: "Third movies", popularity: 96, overview: "Dreams..." },
    { id: 4, title: "Fourth movies", popularity: 95, overview: "Dreams..." },
  ],
};

const moviesReducers: Reducer<MovieState, Action> = (state, action) => {
  return initialState;
};

export default moviesReducers;
