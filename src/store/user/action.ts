import { AUTHORIZATION, IUser, UserActionsType, EXIT } from './types';

export const authorization = (user: IUser): UserActionsType => (
    {
        type: AUTHORIZATION,
        user
    }
)

export const exit = (): UserActionsType => (
    {
        type: EXIT,
    }
)