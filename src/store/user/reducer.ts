import { UserActionsType, AUTHORIZATION, EXIT, IUserType } from "./types"
import userType from "src/model/userType"

const initState = (): IUserType => (
    {
        login: localStorage.getItem('login') || '',
        type: Number(localStorage.getItem('type')) || userType.GUEST
    }
);

export const userReducer = (state = initState(), action: UserActionsType)=> {
    switch(action.type) {

        case AUTHORIZATION: {
                    const { login, password } = action.user;

                    if ( login === "dima" && password === "444") {
                        localStorage.setItem('type', `${userType.USER}`)
                        localStorage.setItem('login', `${login}`)
                        return {
                            type: userType.USER,
                            login
                        }
                    }

                    if ( login === "admin" && password === "444") {
                        localStorage.setItem('type', `${userType.ADMIN}`)
                        localStorage.setItem('login', `${login}`)
                        return {
                            type: userType.ADMIN,
                            login
                        }
                    }
                    alert("Не верный логин или пароль");
                    return state;
                }
            case EXIT: {
                localStorage.setItem('type', `${userType.GUEST}`);
                localStorage.setItem('login', ``)
                return {
                    type: userType.GUEST,
                    login: ''
                }
            }
        default: 
            return state; 
    } 
}