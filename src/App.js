import React from "react";
import Header from "./components/Header/Header";
import {Home} from "./components/pages/Home";
import {Route} from "react-router-dom";
import Cart from "./components/pages/Cart";

let App = (props) => {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    )
}

export default App;