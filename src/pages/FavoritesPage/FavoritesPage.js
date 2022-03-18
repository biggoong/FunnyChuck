import React, { useEffect, useState } from "react";
import { getRandomPost } from '../../api';
import { useFavorites } from '../../hooks/useFavorites';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export const FavoritesPage = () => {
    const { favJokes, handleRemoveFavorite, handleAddToFavorite } = useFavorites();
    const [count, setCount] = useState(0);
    const [on, setOn] = useState(false);

    let timeout;

    // Looking for on to turn on setTimeout
    useEffect(() => {
        if (on) {
            timeout = setTimeout(() => {
                setCount(count + 1);
            }, 1000);
        } else {
            clearTimeout(timeout);
            setCount(0);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [on, count]);

    // If count up to 5s fetch and add 1 joke
    useEffect(async () => {
        if (count === 5) {
            try {
                const res = await getRandomPost(1);
                if (res?.value) {
                    handleAddToFavorite(res.value[0]);
                }

                setCount(0);
            } catch (error) {
                alert(error);
            }
        }
    }, [count]);

    // If jokes is 10 turn off the button
    useEffect(() => {
        if (favJokes.length === 10) {
            setOn(false);
        }
    }, [favJokes.length]);

    const handleToggleAddMore = () => {
        if (favJokes.length < 10) {
            setOn(!on)
        } else {
            setOn(false);
        }
    }

    return (
        <>
            <Header
                src="https://50plusreport.com/wp-content/uploads/2015/10/50-Plus-Report-Chuck-Norris-Staying-Sexy-at-75-Sandra-Rockwood-770x470.jpg"
                title="Yours favorites!"
                buttonTitle="add more"
                onButtonClick={handleToggleAddMore}
            />

            {on && <p>{`more in ${count} s`}</p>}

            {favJokes &&
                <section className="card-container">
                    {favJokes.map(joke => (
                        <Card
                            key={joke.id}
                            id={joke.id}
                            joke={joke.joke}
                            onRemove={() => handleRemoveFavorite(joke)}
                            isFav
                        />
                    ))}
                </section>
            }
        </>
    )
};
