import React from "react";
import { useState, useEffect } from "react";
import PokemonPics from "../components/PokemonPics";
import { useContext } from "react";
import { Context } from "./App/App";


function Pokemon() {
  const {allPokemon, setAllPokemon} = useContext(Context);
  const [getMore, setGetMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=21`
  );

  // get pokemon on load
  const getAllPokemon = async () => {
    const res = await fetch(getMore);
    const data = await res.json();

    setGetMore(data.next);

    // make function to loop and get specific pokemon with its stats in an array
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        // get current list of all pokemon and at the end add the new pokemon
        setAllPokemon((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemon);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="app-box">
      <h1>Pokemon Evolution</h1>
      {/* <Searchbar/> */}
      <div className="Pokemon-box">
        <div className="all-box">
          {allPokemon.map((pokemon, index) => (
            <PokemonPics
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        </div>
        <button className="get-more" onClick={() => getAllPokemon()}>
          Get More
        </button>
      </div>
    </div>
  );
}
export default Pokemon;
