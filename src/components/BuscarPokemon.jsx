import { useState } from "react";

export const BuscarPokemon = ({ handleGetPokemon }) => {
    const [nombrePokemon, setNombrePokemon] = useState('');

    return (
        <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <form className="d-flex" onSubmit={(e) => handleGetPokemon(e, nombrePokemon)}>
                <input type="text" className="bg-warning text-center form-control ms-4 me-2" placeholder="Buscar Pokémon"onChange={(e) => setNombrePokemon(e.target.value)}/>
                <input type="submit" value="Buscar" className="btn btn-outline-warning text-center"/>
            </form>
        </div>
    );
}
