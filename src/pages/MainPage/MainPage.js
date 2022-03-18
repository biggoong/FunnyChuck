import React, { useCallback, useState } from "react";
import { getRandomPost } from '../../api';

export const MainPage = () => {
    const [jokes, setJokes] = useState([]);

    const handleGetJokes = async () => {
        try {
            const res = await getRandomPost();
            console.log(res);
            if (res?.value) {
                setJokes(res.value)
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <header className="App-header">
                <img src="https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg" className="App-logo" alt="logo" />
                <p>
                    Hey, let's have some fun!
                </p>
                <button onClick={handleGetJokes}>get jokes</button>
            </header>

            <section className="card-container">
                {jokes.map(joke => (
                    <div className="joke-card">
                        <p>{joke.id}</p>
                        <p>{joke.joke}</p>
                    </div>
                ))}
            </section>
        </>
    )
}