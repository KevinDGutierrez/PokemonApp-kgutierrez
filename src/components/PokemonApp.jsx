import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { BuscarPokemon } from './BuscarPokemon';
import { ContenedorPokemon } from './ContenedorPokemon';

export const PokemonApp = () => {
    const { handleGetPokemon, pokemon } = usePokemon();

    return (
        <>
            <BuscarPokemon handleGetPokemon={handleGetPokemon} />
            <ContenedorPokemon pokemon={pokemon} />
        </>
    );
}
