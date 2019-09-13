export const NEWS_REQUEST = "news.NEWS_REQUEST";

export interface INews {
    source: {
        id: string, 
        name: string,
    },
    author: string,
    title: string, 
    description: string,
    url: string,
    urlToImage: string, 
    publishedAt: string, 
    content: string, 
}

export interface INewsRequestAction {
    type: typeof NEWS_REQUEST;
}

export type newsActionsType = INewsRequestAction;
