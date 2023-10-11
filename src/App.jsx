import React from 'react';
import PokemonCard from './components/PokemonCard'; 

function App() {
  return (
    <div> 
      <PokemonCard
        name="Bulbasaur"
        description="Bulbasaur is a grass-type Pokémon."
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      />
    </div>
  );
}

export default App;
