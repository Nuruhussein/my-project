import React, { useState } from "react";
import axios from "axios";
import { baseurl } from "../Urls";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateInputs = () => {
    const { name, email, phonenumber, message } = formData;

    if (!name || !email || !phonenumber || !message) {
      return false; // All fields must be filled
    }

    // Add basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!validateInputs()) {
      setErrorMessage("Please fill in all fields correctly.");
      return;
    }

    setErrorMessage(""); // Clear error message before submitting

    try {
      const response = await axios.post(
        `${baseurl}/messages`,
        formData
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // }
      );

      // Handle successful response
      setSuccessMessage("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        phonenumber: "",
        message: "",
      }); // Reset form
    } catch (error) {
      // Handle errors appropriately
      if (error.response) {
        setErrorMessage(
          `Error: ${error.response.status} - ${
            error.response.data.message || "An error occurred"
          }`
        );
      } else if (error.request) {
        setErrorMessage("No response from server. Please try again later.");
      } else {
        setErrorMessage(`Request error: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 className="text-indigo-600 font-semibold">Contact</h3>
            <p className="text-gray-800 text-2xl font-semibold sm:text-3xl">
              መልክቶን ያስከምጡ
            </p>
            <p>መልክቶን ታች ባለው ፎርም ላይ ይሙሉ ፣ ፎርሙን ሲሞሉ አለመዝለሎን ያረጋግጡ </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            {errorMessage && (
              <div className="text-red-600 mb-4">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="text-green-600 mb-4">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                <div>
                  <label className="font-medium">ስም</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">ኢሜል</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">ስልክ ቁጥር</label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    name="phonenumber"
                    required
                    value={formData.phonenumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">መልክት</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                ያረጋግጡ
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactForm;
