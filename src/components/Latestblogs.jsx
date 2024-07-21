import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { baseurl } from "../Urls";
const Latestblogs = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const PF = `${baseurl}/uploads/`;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseurl}/posts`)
      .then((response) => {
        setPost(response.data.posts);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <section className=" pt-0 md:py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            አል-መህዲ አዳዲስ
          </h1>
          <div className="h-1 md:w-72 w-64 bg-red-700 rounded-lg flex flex-auto sm:mx-auto" />
          <p className="text-gray-600">በ የጊዘው የሚወጡ አዳዲስ የአል-መህዲ መርከዝ ልጥፎች::</p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {post.map((items, key) => (
              <li
                className="w-full mx-auto group sm:max-w-sm shadow-md transition ease-in hover:-translate-y-2 hover:shadow-lg"
                key={key}
              >
                {/* image responsive                */}
                <div className="overflow-hidden max-w-full max-h-[384px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg ">
                  <img
                    src={PF + items.image}
                    loading="lazy"
                    alt={items.title}
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 object-cover object-center w-full h-[380px] rounded-lg"
                  />
                </div>

                <div className="mt-3 pb-2 space-y-2">
                  {/* <span className="block text-indigo-600 text-sm">{items.createdAt.toString()}</span> */}
                  <Link rel="stylesheet" to={`/singlepost/${items._id}`}>
                    {" "}
                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                      {items.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm truncate max-w-[380px] duration-150 group-hover:text-gray-800">
                    {items.content.substring(0, 100) + " ..."}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Latestblogs;
