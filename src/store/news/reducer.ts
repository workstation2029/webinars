import { newsActionsType, NEWS_REQUEST, INews, NEWS_RECEIVE } from "./types"
import NewsApi from "src/services/newsApi/newsApi";

const initState = {
    list: [] as INews[],
    isFetching: true,
}

export const newsReducer = (state = initState, action: newsActionsType) => {
    switch(action.type) {
        case NEWS_REQUEST:
                NewsApi.lastBBCNews()
                return Object.assign({}, state);
        case NEWS_RECEIVE:
            return Object.assign({}, state, {
                list: action.list,
                isFetching: false
            })
        default: 
            return state;
    }
}