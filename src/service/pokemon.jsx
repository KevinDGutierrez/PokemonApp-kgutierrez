export const reqPokemon = async (nombrePokemon) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}/`);
        if (!resp.ok) {
            throw new Error('error');
        }
        const data = await resp.json();

        const pokemon = {
            id: data.id,
            name: data.name,
            sprites: {
                front_default: data.sprites.front_default,
                front_shiny: data.sprites.front_shiny,
            },
            abilities: data.abilities,
            types: data.types,
            weight: data.weight,
            height: data.height,
            base_experience: data.base_experience,
            stats: data.stats
        };

        return pokemon;
    } catch (err) {
        console.error("Fallo al cargar el pokemon", err);
        throw err;
    }
}
