import React from 'react';

export const ContenedorPokemon = ({ pokemon }) => {
    const { name, sprites, abilities, types, id, weight, height, base_experience, stats } = pokemon || {};

    return (
        <div key={name || 'default'} className="d-flex flex-column justify-content-center align-items-center mt-3">
            {name ? (
                <>
                    <h4 className="bg-warning text-center ms-1 mt-4">{name.toUpperCase()}</h4>
                    <div className="d-flex flex-row">
                        <img className="rounded-pill mt-3 my-3 img-fluid" style={{ width: '200px', height: '200px' }} src={sprites?.front_default} alt={`${name} normal`} />
                        <img className="rounded-pill mt-3 my-3 img-fluid ms-3" style={{ width: '200px', height: '200px' }} src={sprites?.front_shiny} alt={`${name} shiny`} />
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <ul className="list-group">
                            <li className="list-group-item">ID: {id}</li>
                            <li className="list-group-item">Tipo: {types?.map(type => type.type.name).join(', ')}</li>
                            <li className="list-group-item">Habilidades: {abilities?.map(ability => ability.ability.name).join(', ')}</li>
                            <li className="list-group-item">Peso: {weight} hectogramos</li>
                            <li className="list-group-item">Altura: {height} decímetros</li>
                            <li className="list-group-item">Experiencia Base: {base_experience}</li>
                            <li className="list-group-item">
                                Estadísticas Base:
                                <ul>
                                    {stats?.map(stat => (
                                        <li key={stat.stat.name}>
                                            {stat.stat.name}: {stat.base_stat}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </>
            ) : (
                <p>No se encontró el Pokémon</p>
            )}
        </div>
    );
}
