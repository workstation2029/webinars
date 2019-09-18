import * as React from 'react';
import './News.scss';
import { AppState } from 'src/store';
import { newsFetch } from 'src/store/news/action'
import { connect } from 'react-redux';
import { INews } from 'src/store/news/types';
import { NavLink as Link } from 'react-router-dom';

interface INewsProps {
    news: {
        list: INews[];
        isFetching: boolean
    },
    isFetching: boolean;
    newsFetch: () => void;
}

class News extends React.Component<INewsProps, {}> {
    public componentDidMount() {
        this.props.newsFetch();
    }

    public render() {
        const news = this.props.news;
        return (
            <section className="news">
                <ul className="news__list">
                    {news.list.map( (item, i) =>
                        (<Link to={`/news/${i}`} key={i}>
                            <li className="news__item">
                                <h3 className="news__title">{item.title}</h3>
                                <p className="news__text">{item.description}</p>
                            </li>
                        </Link>)
                    )}
                </ul>
            </section>
        );
    }
};

const mapStateToProps = (state: AppState) => ({
    news: state.news,
});

// tslint:disable-next-line: ban-types
const mapDispatchToProps = (dispatch: Function) => ({
    newsFetch: () => { dispatch(newsFetch()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
