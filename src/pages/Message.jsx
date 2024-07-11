import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
// import { useLocation } from "react-router";
import Spinner from '../components/Spinner';
import { baseurl } from '../Urls';

const Message = () => {
const [messages, setMessages] = useState([]);
const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  
  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`${baseurl}/messages/${id}`)
      .then(() => {
        setLoading(false);
   
       window.location.replace("/message");
      })
      .catch((error) => {
        setLoading(false);
    
        console.log(error);
      });
  };


  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseurl}/messages`)
      .then((response) => {
        setMessages(response.data.messages);
        
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  return (
<>


{loading ? <Spinner/> : 


    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
         email
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
           phonenumber
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((messages, index) => (
          <tr key={messages._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {messages.name}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {messages.email}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {messages.phonenumber}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/message/${messages._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                
            
                  <MdOutlineDelete onClick={()=>handleDelete(messages._id)}  className='text-2xl text-red-600' />
                
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>}
    </>
  );
};

export default Message;
