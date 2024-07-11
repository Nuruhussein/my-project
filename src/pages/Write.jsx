import { useState } from "react";
import axios from "axios";
import { useUser } from "../Context";
import { baseurl } from "../Urls";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
   const data = useUser();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
        const formData = new FormData();
   formData.append("image", file);
    formData.append("title", title);
    formData.append("content", content);
   
    try {
      const response = await axios.post(`${baseurl}/upload`, formData);
      const { filename } = response.data;
      console.log(filename);
      await axios.post(`${baseurl}/posts`, { title, content, image: filename });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="py-10">
     {data && data.user && <p>Welcome, {data.user.username}</p>}

      {file && (
        <img className="mx-auto mb-5 w-full md:max-w-xl h-64 object-cover rounded-lg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <div className="flex items-center mb-5">
          <label htmlFor="fileInput">
            <i className="fas fa-plus mr-2 text-gray-500"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            name="image"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="flex-grow mr-2 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            autoFocus={true}
            value={title} // Add value attribute to bind input to state
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Tell your story..."
          className="w-full h-96 p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
          value={content} // Add value attribute to bind textarea to state
          onChange={(e) => setContent(e.target.value)} // Update to use 'setContent' instead of 'setTitle'
        ></textarea>
        <button type="submit" className="mt-3 w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 focus:outline-none">
          Publish
        </button>
      </form>
    </div>
  );
}
