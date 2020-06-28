import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur, repudiandae id doloribus nemo blanditiis sequi quos praesentium inventore ea maiores possimus quibusdam illo rem ad ab ullam quas perferendis."
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur, repudiandae id doloribus nemo blanditiis sequi quos praesentium inventore ea maiores possimus quibusdam illo rem ad ab ullam quas perferendis."
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur, repudiandae id doloribus nemo blanditiis sequi quos praesentium inventore ea maiores possimus quibusdam illo rem ad ab ullam quas perferendis."
    },
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;