import React from 'react';
import PropTypes from 'prop-types'; // Importer PropTypes depuis le package prop-types

const PokemonCard = (props) => {
  console.log(props);

  return (
    <div className="pokemon-card">
      <figure>
        {props.pokemon.imgSrc ? (
          <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{props.pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

// Définir les PropTypes pour le composant PokemonCard
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired, // Propriété name requise de type string
    imgSrc: PropTypes.string, // Propriété imgSrc optionnelle de type string
  }).isRequired, // Le composant nécessite une prop pokemon
};

const App = () => {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc: "mew.png",
    },
  ];

  const pokemon = pokemonList[1];

  return (
    <div className="App">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
};

export default App;
