import React, { Component } from "react";
import { Link } from "react-router-dom";

class StarShip extends Component {
  state = {};
  render() {
    return (
      <div className="Starship-container">
        {this.props.starships.map((ships, idx) => (
          <Link to={`/${idx}`}>
            <div className="Starship-div" key={idx}>
              <h3>{ships.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default StarShip;
