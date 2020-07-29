import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEditPage from "../Photo/pages/AddEditPage";
import MainPage from "../Photo/pages/MainPage";

const Photo = (props) => {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <div>
      <Switch>
        <Route exact path={match.url} component={MainPage} />
        <Route exact path={`${match.url}/add`} component={AddEditPage} />
        <Route exact path={`${match.url}/:photoId`} component={AddEditPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Photo;
