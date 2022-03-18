import React, { useCallback, useState } from "react";
import { getRandomPost } from '../../api';
import { useFavorites } from '../../hooks/useFavorites';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export const MainPage = () => {
    const { favIds, handleAddToFavorite, handleRemoveFavorite } = useFavorites();
    const [jokes, setJokes] = useState([]);

    const handleGetJokes = async () => {
        try {
            const res = await getRandomPost();
            if (res?.value) {
                setJokes(res.value)
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <Header
                src="https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg"
                title="Hey, let's have some fun!"
                onButtonClick={handleGetJokes}
            />

            <section className="card-container">
                {jokes.map(joke => (
                    <Card
                        key={joke.id}
                        id={joke.id}
                        joke={joke.joke}
                        onAdd={() => handleAddToFavorite(joke)}
                        onRemove={() => handleRemoveFavorite(joke)}
                        isFav={favIds.includes(joke.id)} />
                ))}
            </section>
        </>
    )
}