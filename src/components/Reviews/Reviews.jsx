import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/MovieService';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState();
  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviewsData).catch(console.log);
  }, []);

  return (
    reviewsData && (
      <ul>
        {reviewsData.map(({ author, content }) => (
          <li>
            <div>Author: {author}</div>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Reviews;
