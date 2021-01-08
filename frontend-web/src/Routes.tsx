import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './home';
import Orders from './Orders';
import Navbar from './Navbar';

function Routes() {
    return (
        <BrowserRouter >
        <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
