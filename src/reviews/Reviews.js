import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Rate } from "antd";
import axios from "axios";
import "../reviews/Reviews.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [averageReviews, setAverageReviews] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("lowest"); // Initial sorting order is highest rating

  useEffect(() => {
    // Fetch reviews data from the API
    axios
      .get("http://localhost:3000/admin/patients/rating-reviews")
      .then((response) => {
        setReviews(response.data.results); // Assuming 'results' contains the review data
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });

    axios
      .get("http://localhost:3000/admin/doctors/rating-reviews")
      .then((response) => {
        console.log("response", response);
        setAverageReviews(response.data.results); // Assuming 'results' contains the review data
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  console.log("REVIEWSSS", reviews);
  console.log("Average Reviews", averageReviews);

  const averageRatingMapping = {};
  averageReviews.forEach((item) => {
    averageRatingMapping[item.doctor_id] = parseFloat(
      item.average_rating
    ).toFixed(1);
  });

  // Sort reviews based on the sorting order and average ratings
  const sortedReviews = reviews.slice().sort((a, b) => {
    if (sortingOrder === "highest") {
      return (
        parseFloat(averageRatingMapping[b.doctor_id]) -
        parseFloat(averageRatingMapping[a.doctor_id])
      );
    } else {
      return (
        parseFloat(averageRatingMapping[a.doctor_id]) -
        parseFloat(averageRatingMapping[b.doctor_id])
      );
    }
  });

  const handleDeleteReview = (reviewId) => {
    const updatedReviews = reviews.filter((review) => review.id !== reviewId);
    setReviews(updatedReviews);
  };

  return (
    <div className="reviews-container">
      <div className="sorting-buttons">
        <div className="highest-button">
          <Button
            className="highest-btn"
            type={sortingOrder === "highest" ? "primary" : "default"}
            icon={<ArrowUpOutlined />}
            onClick={() => setSortingOrder("highest")}
          >
            Highest Rating
          </Button>
        </div>

        <div className="lowest-button">
          <Button
            className="lowest-btn"
            type={sortingOrder === "lowest" ? "primary" : "default"}
            icon={<ArrowDownOutlined />}
            onClick={() => setSortingOrder("lowest")}
          >
            Lowest Rating
          </Button>
        </div>
      </div>
      {sortedReviews && sortedReviews.length > 0 ? (
        sortedReviews.map((review, index) => (
          <div key={index} className="review-card">
            <Popconfirm
              title="Are you sure you want to delete this review?"
              onConfirm={() => handleDeleteReview(review.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="link"
                icon={<DeleteOutlined />}
                className="delete-button"
                style={{ color: "red" }} // Add this inline style
              />
            </Popconfirm>
            <div className="doctor-info">
              <span className="doctor-name">{`Dr. ${review.doctor_first_name} ${review.doctor_last_name}`}</span>
              <span className="average-rating">
                Average Rating:{" "}
                <span className="average-rating-number">
                  {averageRatingMapping[review.doctor_id]}
                </span>
              </span>
            </div>
            <div className="patient-info">
              <span className="patient-name">{`${review.patient_first_name} ${review.patient_last_name}`}</span>
              <div className="star-rating">
                <Rate disabled defaultValue={review.rating} />
              </div>
            </div>
            <div className="comment">{review.review}</div>
          </div>
        ))
      ) : (
        <div>No reviews available</div>
      )}
    </div>
  );
};

export default Reviews;
