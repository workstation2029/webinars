import * as React from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { authorization } from 'src/store/user/action';
import { Dispatch } from 'redux';
import { UserActionsType } from 'src/store/user/types';

interface ILoginProps {
    user: {
        login: string,
        type: string
    };
    handleClick: any;
}
interface IFormItem {
    lable: string,
    fieldType: string,
    ref: null | HTMLInputElement
}
const Login: React.FunctionComponent<ILoginProps> = ({ user, ...props }) => {
    const formItems: IFormItem[] = [
        {
            lable: `Логин`,
            fieldType: `text`,
            ref: null
        },
        {
            lable: `Пароль`,
            fieldType: `text`,
            ref: null
        }
    ];

    const handleClick = () => {
        return (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            
            const login = formItems[0].ref!.value;
            const password = formItems[1].ref!.value;

            props.handleClick({ login, password });
        }
    }

    return (
        <section className="login">
            <form className="login__form">
                {
                    formItems.map(({ lable, fieldType }, i) => (
                        <label key={i}>
                            <input type={fieldType} placeholder={lable} ref={ e => formItems[i].ref = e}/>
                        </label>
                    ))
                }
                <button className="login__button button" onClick={handleClick()}>Авторизоваться</button>
            </form>
        </section>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<UserActionsType>) => ({
    handleClick: (user: any) => {
            dispatch(authorization(user));
    }
})

export default connect(null, mapDispatchToProps)(Login);
