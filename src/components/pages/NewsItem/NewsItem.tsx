import * as React from 'react';
import { INews } from 'src/store/news/types';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from 'src/store';

interface INewsItemProps extends INews, RouteComponentProps<{id: string}> {
    list: INews[];
}
const NewsItem: React.FunctionComponent<INewsItemProps> = (props) => {
    const id = +props.match.params.id;
    const { author, title, urlToImage, content } = props.list[id] || ['','','',''];
    console.log(props.list)

    console.log(id);
    return (
        <section className="news-item">
            <h2 className="news-item__title">{title}</h2>
            <img src={urlToImage} alt={title}/>
            <p>{content}</p>
            <span>{author}</span>
        </section>
    );
};
const mapStateToProps = (state: AppState) => (
    {
        list: state.news.list
    }
)
export default connect(mapStateToProps)(NewsItem);
