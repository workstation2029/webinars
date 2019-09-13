import { newsActionsType, NEWS_REQUEST, INews } from "./types"
import NewsApi from "src/services/newsApi/newsApi";

const initState: INews[] = [];

export const newsReducer = (state = initState, action: newsActionsType) => {
    switch(action.type) {
        case NEWS_REQUEST:
            console.log(NewsApi.lastBBCNews());
            return NewsApi.lastBBCNews();
        default: 
            return state;
    }
}