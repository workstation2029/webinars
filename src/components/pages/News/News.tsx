import * as React from 'react';
import './News.scss';

interface INewsProps {
}

const News: React.FunctionComponent<INewsProps> = (props) => {
    const news = [
        {
            title: 'Новость 1',
            text: 'Привет мир'
        },
        {
            title: 'Новость 2',
            text: 'Привет мир'
        },
        {
            title: 'Новость 3',
            text: 'Привет мир'
        },
        {
            title: 'Новость 4',
            text: 'Привет мир'
        },
        {
            title: 'Новость 5',
            text: 'Привет мир'
        },
        {
            title: 'Новость 6',
            text: 'Привет мир'
        },
        {
            title: 'Новость 7',
            text: 'Привет мир'
        },
        {
            title: 'Новость 8',
            text: 'Привет мир'
        },
    ]
    return (
        <section className="news">
            <ul className="news__list">
                {news.map( ({title, text}, i) =>
                    (<li className="news__item" key={i}>
                        <h3 className="news__title">{title}</h3>
                        <p className="news__text">{text}</p>
                    </li>)
                )}
            </ul>
        </section>
    );
};

export default News;
