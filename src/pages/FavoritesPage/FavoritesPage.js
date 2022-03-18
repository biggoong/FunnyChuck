import React from "react";
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export const FavoritesPage = () => {
    return (
        <>
            <Header src="https://50plusreport.com/wp-content/uploads/2015/10/50-Plus-Report-Chuck-Norris-Staying-Sexy-at-75-Sandra-Rockwood-770x470.jpg" title="Yours favorites!" />

            <section className="card-container">
                <Card id={11} joke="dhbhcdbch" />
            </section>
        </>
    )
};
