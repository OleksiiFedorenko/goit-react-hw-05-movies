import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/MovieService';
import Loader from 'components/Loader/Loader';
import Warning from 'components/Warning/Warning';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getReviews(id) {
      setIsLoading(true);
      try {
        const data = await fetchMovieReviews(id);
        console.log(data);
        setReviewsData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (movieId) getReviews(movieId);
  }, [movieId]);

  if (isLoading) return <Loader />;

  if (isError) return null;

  if (!reviewsData.length) return <Warning message="No reviews yet" />;

  return (
    <ul>
      {reviewsData.map(({ id, author, content }) => (
        <li key={id}>
          <div>Author: {author}</div>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
