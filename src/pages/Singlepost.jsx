import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Spinner from '../components/Spinner';
import { useUser } from '../Context';
import { Link } from "react-router-dom";
import { baseurl } from "../Urls";
import { useParams } from 'react-router-dom';

export default function SinglePost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const PF = `${baseurl}/uploads/`;
  const location = useLocation();
  // const path = location.pathname.split("/")[2];
    const { id } = useParams();
 const data=useUser();




// // Example function to delete a post
// const handleDelete = async () => {
//   try {
//     await axios.delete(`http://localhost:5555/posts/${path}`);
//     window.location.replace("/");
//   } catch (err) {
//     console.error("Failed to delete post:", err);
//   }
// };

// const handleUpdate = async () => {
//   try {
//     await axios.put(`http://localhost:5555/posts/${path}`);
//     window.location.replace("/");
//   } catch (err) {
//     console.error("Failed to delete post:", err);
//   }
// };



  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${baseurl}/posts/${id}`);
        console.log(response.data.post);
        setPost(response.data.post);
     
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!post) {
    return <p>No post found</p>;
  }

  return (
    <>
    <div className="p-20 md:flex-row gap-14 flex flex-col justify-center items-center">
     <div className=" flex items-center  justify-start">
      <img
        src={PF + post.image}
        alt="Post image"
        className=" h-2/3 max-h-[517px]  max-w-screen-sm rounded-lg items-center  object-cover object-center"
      />
      </div> 
      <div className=" flex flex-col justify-center items-center max-w-xl ">
        <h1 className="text-center text-3xl font-medium font-serif mb-10">{post.title}</h1>
      <p className="text-gray-600  text-18 leading-25">
        {post.content}
      </p>
     {data.user && <div className="flex  w-3/4 justify-end  "> <Link to={`/update/${post._id}`} ><i className="singlePostIcon far fa-edit text-blue-500 text-3xl cursor-pointer m-4 "  ></i></Link>
                           <Link to={`/delete/${post._id}`} >   <i className="singlePostIcon far fa-trash-alt text-red-500 text-3xl cursor-pointer m-4" 
                               ></i></Link>
</div>} 
      
        </div>
    </div>
    <p className="text-gray-500 text-center text-14 mt-5">Published: {post.createdAt}</p>
    </>
  );
}
