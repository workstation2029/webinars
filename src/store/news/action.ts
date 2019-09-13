import { NEWS_REQUEST, newsActionsType } from "./types";

export const newsRequest = (): newsActionsType => (
    {
        type: NEWS_REQUEST,
    }
);

export const newsReceive = (): newsActionsType => (
    {
        type: NEWS_RECEIVE 
    }
);