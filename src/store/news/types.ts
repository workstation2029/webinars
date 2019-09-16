export const NEWS_REQUEST = "news.NEWS_REQUEST";
export const NEWS_RECEIVE = "news.NEWS_RECEIVE";

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

export interface INewsReceiveAction {
    type: typeof NEWS_RECEIVE;
    list: INews[];
}

export type newsActionsType = INewsRequestAction | INewsReceiveAction;
