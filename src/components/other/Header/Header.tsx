import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Header.scss';
import { AppState } from 'src/store';
import userType from 'src/model/userType';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { exit } from 'src/store/user/action';

interface IHeaderProps {
    user: {
        login: string;
        type: userType
    },
    handleButtonExit: () => void;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ user, ...props }) => {

    const handleButtonExit = () => (
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            props.handleButtonExit();
        }
    )

    const selectNavList = () => {

        switch (+user.type) { 
            case userType.ADMIN:
            return [
                {
                    title: 'Главная',
                    link: '/',
                },
                {
                    title: 'Новости',
                    link: '/news',
                },
                {
                    title: 'Профиль',
                    link: '/profile',
                },
            ];
        case userType.USER:
            return [
                    {
                        title: 'Главная',
                        link: '/',
                    },
                    {
                        title: 'Новости',
                        link: '/news',
                    },
                    {
                        title: 'Профиль',
                        link: '/profile',
                    },
                ];
        }
        return [
            {
                title: 'Главная',
                link: '/',
            },
            {
                title: 'Авторизация',
                link: '/login',
            },
            {
                title: 'Новости',
                link: '/news',
            },
        ];
    }
    
    const navList = selectNavList();

    return (
        <header className="header">
            <nav className="header__nav">
                {user.login && <span>{user.login.toLocaleLowerCase()}</span>}
                <ul className="header__list">
                    {
                        navList && navList.map( ({ title, link }, i) => (
                            <li className="header__item" key={i}>
                                <Link to={link} className="header__link">{title}</Link>
                            </li>
                        ))
                    }
                </ul>
                {!(+user.type === userType.GUEST) && <button onClick={handleButtonExit()}>Выход</button> }
            </nav>
        </header>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleButtonExit: () => (
        dispatch(exit())
    )
});
const mapStateToProps = (state: AppState) => ({
    user: state.user
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
