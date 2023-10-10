import React from 'react';

const PokemonCard = ({ name, imageUrl}) => {
    console.log(name);
    console.log(imageUrl);
  return (
    <div className="pokemon-card">
      <figure>
        <img 
        src={imageUrl}
        alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;
