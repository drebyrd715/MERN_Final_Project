import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <h4>Home</h4>
      </Link>

      <Link to="/orders/new">
        <h4> Orders </h4>
      </Link>

      <Link to="/PokemonPics">
        <h4>Pokemon</h4>
      </Link>

      <Link to="/WeatherPage">
        <h4>Weather</h4>
      </Link>
    </div>
  );
}

export default Nav;
