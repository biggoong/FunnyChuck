import React, { useState, useEffect } from "react";
import { saveState, loadState } from '../utils/localStorage';

export const useFavorites = () => {
    const [favJokes, setFavJokes] = useState([]);
    const [favIds, setFavIds] = useState([]);

    useEffect(() => {
        const result = loadState('favs');
        if (result) {
            setFavJokes(result);

            const ids = result.map(jk => jk.id);
            setFavIds(ids);
        }
    }, []);

    const handleAddToFavorite = (favorites) => {
        if (favIds && favIds.length < 10 && !favIds.includes(favorites.id)) {
            saveState('favs', [favorites, ...favJokes]);
            setFavJokes([favorites, ...favJokes]);
            setFavIds([favorites.id, ...favIds]);
        }
    };

    const handleRemoveFavorite = (favorites) => {
        const newFavs = favJokes.filter(jk => jk.id !== favorites.id);
        const newFavIds = newFavs.map(jk => jk.id);
        saveState('favs', [...newFavs]);
        setFavJokes([...newFavs]);
        setFavIds([...newFavIds]);
    };

    return { favJokes, favIds, handleAddToFavorite, handleRemoveFavorite };
}