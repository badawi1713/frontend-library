import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Main from './Components/Main/';
import BookDetails from './Pages/Detail/BookDetail'
// import { register } from "./serviceWorker";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => (<Main {...props} />)} />
          <Route path="/login" render={(props) => (<Login {...props} />)} />
          <Route path="/home" render={(props) => (<Home {...props} />)} />
          <Route path="/register" render={(props) => (<Register {...props} />)} />
          <Route path={"/book/:id"} component={BookDetails} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App