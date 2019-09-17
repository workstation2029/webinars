import { newsActionsType, NEWS_REQUEST, INews, NEWS_RECEIVE } from "./types"

const initState = {
    list: [] as INews[],
    isFetching: true,
}

export const newsReducer = (state = initState, action: newsActionsType) => {
    switch(action.type) {
        case NEWS_REQUEST:
                return state;
        case NEWS_RECEIVE:
            return { 
                ...state,
                list: action.list,
                isFetching: false
            }
        default: 
            return state;
    }
}