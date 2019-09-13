import * as React from 'react';
import './News.scss';
import { AppState } from 'src/store';
import { Dispatch } from 'redux';
import { newsRequest } from 'src/store/news/action'
import { connect } from 'react-redux';
import { INews } from 'src/store/news/types';

interface INewsProps {
    news: INews[],
    newsRequest: () => void;
}

class News extends React.Component<INewsProps, {}> {
    public componentDidMount() {
        this.props.newsRequest();
    }

    public render() {
        const news = this.props.news;
        return (
            <section className="news">
                <ul className="news__list">
                    {news!.map( (item, i) =>
                        (<li className="news__item" key={i}>
                            <h3 className="news__title">{item.title}</h3>
                            <p className="news__text">{item.description}</p>
                        </li>)
                    )}
                </ul>
            </section>
        );
    }
};

const mapStateToProps = (state: AppState) => ({
    news: state.news,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    newsRequest: () => { dispatch(newsRequest()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
