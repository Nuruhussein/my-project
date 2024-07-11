
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Spinner from '../components/Spinner';
import { baseurl } from "../Urls";
export default function Update() {
     const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
   const [error, setError] = useState(false);
   const location = useLocation();
  const path = location.pathname.split("/")[2];
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${baseurl}/posts/${path}`);
        setPost(response.data.post);
        setTitle(response.data.post.title);
         setContent(response.data.post.content);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [path]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    
        const formData = new FormData();
   formData.append("image", file);
    formData.append("title", title);
    formData.append("content", content);


   if(file){
try {
      const response = await axios.post(`${baseurl}/upload`, formData);
      const { filename } = response.data;
      console.log(filename);
      setError(false);
      await axios.put(`${baseurl}/posts/${path}`, { title, content, image: filename });
      window.location.replace("/");
    } catch (err) {
     if(err.response.status == 400){
     setError(true);
     }
    }
  }
  else{
     setError(true);
   }

   }
   
  
    
if (loading) {
    return <Spinner />;
  }

  if (!post) {
    return <p>No post found</p>;
  }

  return (
    <div className="py-10">
         {error && <p className="text-red-600 text-center py-10 text-lg">please fill all</p> }
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
          Publish the update
        </button>
      </form>
    </div>
  );
}
