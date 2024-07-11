import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { baseurl } from "./Urls";

// Create a new context
const UserContext = createContext();

// Create a custom hook to use the user context
export const useUser = () => useContext(UserContext);
axios.defaults.withCredentials = true;
// Create a UserProvider component to manage user state
export const UserProvider = ({ children }) => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    // Clear user state upon logout
    setUser(null);
  };

  useEffect(() => {
    // Fetch user data on component mount
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseurl}/auth/check`, { withCredentials: true });
        setIsAuthenticated(response.data.isAuthenticated);
       
        if (response.data.isAuthenticated) {
          setUser(response.data.user);
        }
        else{
          setUser(null)
        }
        
      } catch (error) {
         console.error('Error checking authentication:', error);
    setUser(null);

      }
    };

    fetchUserData();
   
  }, []);
 
  return (
    <UserContext.Provider value={{ user,isAuthenticated, logout }}>
      {children}
    </UserContext.Provider>
  );
};
