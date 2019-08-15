import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import FavList from "./components/FavList";

const store = createStore(rootReducers);
store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/fav" component={FavList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
