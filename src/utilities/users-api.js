// users-api.js

// This is the base path of the Express route we'll define
const BASE_URL = "/api/users";

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Fetch requires data payloads to be stringified
      // and assigned to a body property on the options object
      body: JSON.stringify(userData),
    });
    // Check if request was successful
    if (res.ok) {
      // res.json() will resolve to the JWT
      return res.json();
    } else {
      throw new Error("Invalid Sign Up");
    }
  } catch {
    console.log("error with signUp function in users-api");
  }
}

export async function logIn(credentials) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid Login");
    }
  } catch (error) {
    console.log("error with LogIn function in users-api");
    throw error;
  }
}
