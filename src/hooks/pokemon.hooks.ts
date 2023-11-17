import Pokemon from "../models/pokemon";
import {useEffect, useState} from "react";
import POKEMONS from "../models/mock-pokemon";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
       setPokemons(POKEMONS)
    }, []);

    return pokemons;
}

export default usePokemons;
