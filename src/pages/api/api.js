// const INFO_API = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6d41fb15c48ec20d9ce7efd1e1d5a9c1&language=es-ES');
// const DATA = await INFO_API.json();
// const resultado = DATA.results;
// console.log(resultado);

//src/pages/api/api.js
export async function get() {
  const INFO_API = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6d41fb15c48ec20d9ce7efd1e1d5a9c1&language=es-ES');
  const DATA = await INFO_API.json();
  return {
      body: JSON.stringify(DATA.results)
  };
}