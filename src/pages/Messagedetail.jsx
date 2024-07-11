import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { baseurl } from '../Urls';

const Messagedetail = () => {
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseurl}/messages/${id}`)
      .then((response) => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
        setLoading(false);
      });
  }, [id]); // Include 'id' in the dependency array to ensure the useEffect runs when 'id' changes

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='p-4 flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 md:p-8'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Message Details</h1>

        <div className='flex flex-col space-y-6'>
          <div className='flex items-center'>
            <span className='font-medium text-gray-600 w-24'>Id:</span>
            <span className='text-gray-800'>{message._id}</span>
          </div>

          <div className='flex items-center'>
            <span className='font-medium text-gray-600 w-24'>Name:</span>
            <span className='text-gray-800'>{message.name}</span>
          </div>

          <div className='flex items-center'>
            <span className='font-medium text-gray-600 w-24'>Email:</span>
            <span className='text-gray-800'>{message.email}</span>
          </div>

          <div className='flex items-center'>
            <span className='font-medium text-gray-600 w-24'>Phone Number:</span>
            <span className='text-gray-800'>{message.phonenumber}</span>
          </div>

          <div className='flex flex-col'>
            <span className='font-medium text-gray-600 mb-2'>Message:</span>
            <div className='bg-gray-100 p-4 rounded-lg overflow-hidden max-w-full'>
              <span className='text-gray-800 break-words'>{message.message}</span>
            </div>
          </div>

          <div className='flex items-center'>
            <span className='font-medium text-gray-600 w-24'>Created At:</span>
            <span className='text-gray-800'>
              {new Date(message.createdAt).toLocaleString()} {/* Formatted date */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messagedetail;
