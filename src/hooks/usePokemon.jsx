import { useState } from 'react';
import { reqPokemon } from '../service/pokemon';

export const usePokemon = () => {
    const [pokemon, setPokemon] = useState(null);

    const handleGetPokemon = async (e, nombrePokemon) => {
        e.preventDefault();

        try {
            const pokemonData = await reqPokemon(nombrePokemon);
            setPokemon(pokemonData);
        } catch (error) {
            console.error("Error fetching the Pokémon:", error);
            setPokemon(null); 
        }
    }

    return {
        handleGetPokemon,
        pokemon
    }
}
