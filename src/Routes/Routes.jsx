import React from "react";
import { Route, Switch } from "react-router";
import { Login } from "../Components/Login";
import { Todo } from "../Components/Todo";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Todo />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    );
};
