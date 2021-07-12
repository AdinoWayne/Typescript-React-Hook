import React from 'react';
import { observer } from 'mobx-react';
import Navbar from "./Components/Navbar";
import {Switch, Route, Redirect} from "react-router";
import {Home} from "./Components/Home";
import {Fav} from "./Components/Fav";
import Footer from "./Components/Footer";
import error from "./Components/error"

function App(): JSX.Element {
    return (
        <>
            <section className="container">
                <Navbar/>
                    <Switch>
                        <Route path="/Favorites" component={Fav}/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/404" component={error}/>
                        <Redirect to="/404"/>
                    </Switch>
            </section>
            <Footer/>
        </>
    );
}

export default observer(App);


