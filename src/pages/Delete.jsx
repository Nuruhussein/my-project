import React, { useState } from 'react';

import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { baseurl } from '../Urls';



const Delete = () => {
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();



  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`${baseurl}/posts/${id}`)
      .then(() => {
        setLoading(false);
   
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
    
        console.log(error);
      });
  };



  return (
       <div className='p-4'>
     
      <h1 className='text-3xl my-4'>Delete post</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this post?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}

export default Delete