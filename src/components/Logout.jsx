import React from "react";
import axios from "axios";
import { useUser } from "../Context"; // Import useUser hook to access context
import { baseurl } from "../Urls";

const Logout = () => {
  const { logout } = useUser(); // Destructure logout function from context

  const handleLogout = async () => {
    try {
      await axios.get(`${baseurl}/auth/logout`, { withCredentials: true });
      console.log("Logout successful");
      logout(); // Trigger logout function to update user state
      window.location.replace("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        onClick={handleLogout}
      >
        Logout
      </a>
    </div>
  );
};

export default Logout;
