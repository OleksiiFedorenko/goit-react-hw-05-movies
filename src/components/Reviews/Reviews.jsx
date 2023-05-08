import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/MovieService';
import Warning from 'components/Warning/Warning';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);
  useEffect(() => {
    if (movieId)
      fetchMovieReviews(movieId).then(setReviewsData).catch(console.log);
  }, [movieId]);

  if (!reviewsData.length) return <Warning message="No reviews yet" />;

  return (
    <ul>
      {reviewsData.map(({ author, content }) => (
        <li key={author}>
          <div>Author: {author}</div>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
