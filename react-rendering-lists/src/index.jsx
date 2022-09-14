import React from 'react';
import ReactDOM from 'react-dom/client';

function RenderPokemon(props) {
  const listItems = props.pokedex.map((pokemon) =>
      <li key={pokemon.number}>
        {pokemon.name}
      </li>
    );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderPokemon pokedex={pokedex} />);
