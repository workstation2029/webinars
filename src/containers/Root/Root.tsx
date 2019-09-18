import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from 'src/components/other/Header/Header';
import { connect } from 'react-redux';
import { AppState } from 'src/store';
import userType from 'src/model/userType';
import { IUserType } from 'src/store/user/types';
import { routeList, redirectList } from './root.data';

interface IRootProps {
    user: IUserType;
}

class Root extends React.Component<IRootProps, {}> {

    public otherRoute = [] as JSX.Element[];
    public otherRedirect = [] as JSX.Element[];

    constructor(props: IRootProps) {
        super(props)
        this.addRoute = this.addRoute.bind(this);
    }

    public render() {
        
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    {this.renderRouterOreRedirect()}
                </Switch>
            </BrowserRouter>
        );
    }

    private renderRouterOreRedirect() {
        const type = this.props.user.type;
        const addRoute = this.addRoute;
        const addRedirect = this.addRedirect;

        switch(type) {
            case userType.GUEST:
                return [
                    redirectList.guest.map( item => addRedirect(item)),
                    routeList.guest.map( item => addRoute(item)),
                ]
            case userType.USER: 
            return [
                redirectList.user.map( item => addRedirect(item)),
                routeList.user.map( item => addRoute(item)),
            ]
            case userType.ADMIN:
            return [
                redirectList.admin.map( item => addRedirect(item)),
                routeList.admin.map( item => addRoute(item)),
            ]
        }
    }


    private addRoute(item: any) {
        const { path, component } = item;
        return <Route exact={true} path={path} component={component} />;
    }

    private addRedirect(item: any) {
        const { from, to } = item;
        return <Redirect exact={true} from={from} to={to} />;
    }
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
});

export default connect(mapStateToProps)(Root);
