import React, { Fragment, Component } from "react";
import { Navbar } from "../../components/navbar";
import { List } from "../list/index";
import { Login } from "../login/index";
import { Recipe } from "../../components/Recipe";
import { Switch, Route } from 'react-router-dom'

class Home  extends Component {
  render() {
    return (
        <div className="app">
          {
            true ? (
              <Fragment>
                <Navbar />
                <main className="content--container">
                  <Switch>
                    <Route path="/" exact component={List} />
                    <Route path="/recipe/:id" exact component={Recipe} />
                  </Switch>
                </main>
              </Fragment>
            ) : (<Login /> )
          }

        </div>
        )}
}
export default Home;
