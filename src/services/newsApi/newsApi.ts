import { store } from "src/store";
import { newsReceive } from "src/store/news/action";


class NewsApi {
    public static key = 'dac5a603fd894263b151270af2d96801';

    public static headers = {
        'X-Api-Key': NewsApi.key
    };

    public static lastBBCNews = () => {
        const url = 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey='+NewsApi.key;
        const req = new Request(url);

        return fetch(req, { headers: NewsApi.headers })
        .then((response) => ( response.json() ))
        .then( res => {
            store.dispatch(newsReceive(res.articles))
        } )
        .catch( err => console.log(err) );
    }
};

export default NewsApi;