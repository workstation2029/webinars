import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from 'src/components/pages/Login/Login';
import Header from 'src/components/other/Header/Header';
import News from 'src/components/pages/News/News';
import Profile from 'src/components/pages/Profile/Profile';
import { connect } from 'react-redux';
import { AppState } from 'src/store';
import userType from 'src/model/userType';

interface IRootProps {
    user: {
        login: string,
        type: userType;
    }
}

class Root extends React.Component<IRootProps, {}> {

    public render() {
        const type = this.props.user.type;
        const redirect = [];
        switch(type) {
            case userType.ADMIN:
            case userType.USER: 
                redirect.push(<Redirect exact={true} from="/" to="/news" key='news'/>);
                redirect.push(<Redirect exact={true} from="/login" to="/profile" key='profile'/>);
                break;
            case userType.GUEST:
                redirect.push(<Redirect exact={true} from="/" to="/login" key="login"/>);
                break;
        }
        return (
            <BrowserRouter>
                {redirect.map( item => item)}
                <Header />
                <Switch>
                    <Route exact={true} path="/login" component={Login}/>
                    <Route exact={true} path="/news" component={News}/>
                    <Route exsct={true} path="/profile" component={Profile}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
});

export default connect(mapStateToProps)(Root);
