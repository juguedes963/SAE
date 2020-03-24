import React from 'react'
import {Switch, Route, BrowserRouter  } from 'react-router-dom'
import PageIndex from "../views/index"
export default function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PageIndex} />

            </Switch>
        </BrowserRouter>

    )

}