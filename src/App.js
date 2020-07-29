import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Header from "./components/Header/Header";

const Photo = React.lazy(() => import("./features/Photo"));

const App = () => {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
