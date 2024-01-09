import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user }) {
  return (
    <nav>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h5>Hello {user.name}</h5>
        <h5>Logged in with: {user.email}</h5>
      </div>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
    </nav>
  );
}

export default NavBar;
