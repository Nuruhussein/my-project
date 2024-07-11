import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { baseurl } from '../Urls';

// Base URL for images
const PF = `${baseurl}/uploads/`;

function Gallery() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch posts when component mounts
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseurl}/posts`)
      .then((response) => {
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Open modal with the given image index
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal and reset the selected image index
  const closeModal = () => {
    setSelectedImageIndex(null);
    setIsModalOpen(false);
  };

  // Handle next image navigation
  const handleNextImage = () => {
    if (posts.length > 0) {
      setSelectedImageIndex((prevIndex) => (prevIndex === posts.length - 1 ? 0 : prevIndex + 1));
    }
  };

  // Handle previous image navigation
  const handlePrevImage = () => {
    if (posts.length > 0) {
      setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? posts.length - 1 : prevIndex - 1));
    }
  };

  // Handle keyboard navigation for the modal
  const handleKeyDown = useCallback(
    (event) => {
      if (!isModalOpen) return;
      switch (event.key) {
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    },
    [isModalOpen, handleNextImage, handlePrevImage]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4">
          {posts.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={PF + item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="text-white text-center">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && selectedImageIndex !== null && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative flex items-center w-full max-w-6xl">
            <button
              className="absolute left-4 text-white text-2xl p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              onClick={(e) => {
                e.stopPropagation(); 
                handlePrevImage(); 
              }}
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              &lt;
            </button>

            <div className="flex justify-center">
              <img
                src={PF + posts[selectedImageIndex].image}
                alt={posts[selectedImageIndex].title}
                className="max-w-[80%] max-h-[80%] object-contain rounded-lg"
              />
            </div>

            <button
              className="absolute right-4 text-white text-2xl p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              onClick={(e) => {
                e.stopPropagation(); 
                handleNextImage(); 
              }}
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
