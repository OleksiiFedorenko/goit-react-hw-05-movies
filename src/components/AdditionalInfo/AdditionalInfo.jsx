import { Container, List, InfoLink } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <Container>
      <h3>Additional info</h3>
      <List>
        <li>
          <InfoLink to="cast">Cast</InfoLink>
        </li>
        <li>
          <InfoLink to="reviews">Reviews</InfoLink>
        </li>
      </List>
    </Container>
  );
};

export default AdditionalInfo;
