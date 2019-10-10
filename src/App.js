import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getAllStarships } from "./Service/SWAPI";
import StarshipPage from "./Pages/StarshipPage";
import Starship from "./components/StarShip";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starships: []
    };
  }

  async componentDidMount() {
    const shipData = await getAllStarships();
    this.setState({
      starships: shipData.results
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">STAR WARS STARSHIPS</header>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Starship starships={this.state.starships} />}
          />
          <Route
            path="/:id"
            render={props => (
              <StarshipPage
                {...props}
                starship={this.state.starships[props.match.params.id]}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
