// axiosSetup.js
import axios from "axios";
import { useUser } from "./Context"; // Import your UserContext or relevant context

// Axios instance
const instance = axios.create({
  baseURL: "http://localhost:5555", // Your backend base URL
  withCredentials: true, // Ensure credentials (cookies) are included
});

// Response interceptor to handle 401 Unauthorized errors
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const { setUser } = useUser(); // Retrieve the setUser function from your context
      setUser(null); // Set user to null when a 401 error occurs
    }
    return Promise.reject(error);
  }
);

export default instance;
