import React, { useState } from "react";
import Divya from "../assets/images/Divya.png";

const reviews = [
  {
    name: "Dr. Divya Das",
    rating: "4.5",  
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: Divya,
    location: "India"
  },
  {
    name: "Dr. Divya Das",
    rating: "2",  
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
    image: Divya,
    location: "India"
  },
  {
    name: "Dr. Divya Das",
    rating: "1.0",  
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages.",
    image: Divya,
    location: "India"
  },
  {
    name: "Dr. Divya Das",
    rating: "3.2",  
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: Divya,
    location: "India"
  },
  {
    name: "Dr. Divya Das",
    rating: "4.5",  
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: Divya,
    location: "India"
  },
  {
    name: "Dr. Divya Das",
    rating: "4.5",  
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: Divya,
    location: "India"
  },
  {
    name: "Dr. Divya Das",
    rating: "4.5",  
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: Divya,
    location: "India"
  }
];

const getStars = (rating) => {
  const stars = Math.ceil(rating);
  return "★".repeat(stars).padEnd(5, "☆");
};

const ReviewCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-6 p-8">
        {currentReviews.map((review, index) => (
          <div key={index} className="p-6 rounded-xl shadow-md bg-white text-black border border-gray-200 flex flex-col justify-between">
            <p className="text-yellow-500 text-lg">{getStars(review.rating)}</p>
            <p className="mt-2 text-gray-700">{review.review}</p>
            <div className="flex items-center mt-4">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-3" />
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-4 mt-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">Page {currentPage} of {totalPages}</span>
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
