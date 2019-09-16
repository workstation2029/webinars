import { NEWS_REQUEST, newsActionsType, INews, NEWS_RECEIVE } from "./types";

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

// export const newsReceive = (): newsActionsType => (
//     {
//         type: NEWS_RECEIVE 
//     }
// );