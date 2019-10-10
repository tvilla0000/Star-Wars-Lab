import React from "react";
import { Link } from "react-router-dom";

class StarshipPage extends React.Component {
  render() {
    return (
      <div className="StarshipPage-container">
        <div className="StarshipPage-div">
          <h4>NAME: {this.props.starship.name}</h4>
          <h4>MODEL: {this.props.starship.model}</h4>
          <Link to="/">RETURN</Link>
        </div>
      </div>
    );
  }
}

export default StarshipPage;
