import { NEWS_REQUEST, newsActionsType, INews, NEWS_RECEIVE } from "./types";
import NewsApi from "src/services/newsApi/newsApi";
import { Dispatch } from "redux";

export const newsRequest = (): newsActionsType => (
    {
        type: NEWS_REQUEST,
    }
);

export const newsReceive = (list: INews[]): newsActionsType => {
    return ({
        type: NEWS_RECEIVE,
        list
    })
};

export const newsFetch = () => (

    (dispatch: Dispatch) => {

        dispatch(newsRequest());

        NewsApi.lastBBCNews();
    }
)