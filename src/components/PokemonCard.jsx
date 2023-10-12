import React from 'react';

const PokemonCard = ({ name, imageUrl }) => {
  return (
    <div className="pokemon-card">
      <figure>
        {imageUrl ? (
          <img src={imageUrl} alt={name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


export default App;

