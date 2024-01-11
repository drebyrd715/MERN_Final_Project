import React from "react";
import * as usersServic from "../utilities/users-service";

function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const token = await usersServic.checkToken();
    return token;
  };

  return (
    <>
      <button onClick={handleCheckToken}>Check logIn Experation</button>
      <h1>Order History Page</h1>
    </>
  );
}

export default OrderHistoryPage;
