import { fetcher, Params, Users } from "~/api";

/* db

eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzQzYTc4NzUxNzYzYTExNDBhYjgwOTgzNzE3NDQ0MiIsInN1YiI6IjY0MDc0NzlhNTViYzM1MDBmNzlmNjIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T-Aw4f18z3rbLeJZU_hU3FN_zi2Odomh1mmeVe58NaU

 */


export const fetchMovies = async (params: Params): Promise<Users> => {
  const { limit = 5, page = 1 } = params || {};
  return fetcher(`https://catfact.ninja/breeds?limit=${limit}&page=${page}`);
};
