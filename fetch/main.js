const dataRequest = new Request('https://jsonplaceholder.typicode.com/users');

fetch(dataRequest)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

const pokemonRequest = new Request('https://pokeapi.co/api/v2/pokemon/1');

fetch(pokemonRequest)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
