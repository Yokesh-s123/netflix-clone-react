let api_key = "ac67692f64345aa88c38d7a8a9284b13";
let req = {
  movie: `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=en-US`,
  stars: `https://api.themoviedb.org/3/trending/person/day?api_key=${api_key}&language=en-US`,
  netO: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213&language=en-US`,
  horror: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27&language=en-US`,
  topr: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
  romance: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749&language=en-US`,
  docu: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99&language=en-US`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28&language=en-US`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35&language=en-US`,
};
export default req;
