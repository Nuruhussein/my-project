import React, { useState } from "react";
import axios from "axios";
import { baseurl } from "../../Urls";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Store detailed error messages
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const res = await axios.post(
        `${baseurl}/login`,
        { username, password },
        { withCredentials: true } // Ensure credentials are sent with the request
      );

      if (res.status === 200 && res.data) {
        // Store user session data and redirect
        sessionStorage.setItem("user", JSON.stringify(res.data));
        window.location.replace("/"); // Redirect to home or dashboard
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      // console.error(err);
      // Handle different types of errors
      if (err.response && err.response.status === 401) {
        
        setError("Invalid username or password.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p>
              Don't have an account?{" "}
              <a
                href="/register" // Assuming a registration page
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
          <div className="text-center">
            {error && (
              <span style={{ color: "red", marginTop: "10px" }}>
                {error}
              </span>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
