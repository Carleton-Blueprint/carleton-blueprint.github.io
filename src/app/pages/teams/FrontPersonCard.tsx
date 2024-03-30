import styled from 'styled-components';
import { PersonProps } from './PersonCard';

const FrontPersonCard = (props: PersonProps) => (
  <Container>
    <Picture src={props.picture} alt={`${props.name}'s profile picture`} />
    <InfoContainer>
      <Name>{props.name}</Name>
      <Role>{props.position}</Role>
    </InfoContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(0);
`;

const Picture = styled.img`
  width: 100%;
  border-radius: 10px;
  background-color: lightgray;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0px;
`;

const Name = styled.h2`
  color: ${(props) => props.theme.colors.primaryBlue};
  margin: 0;
`;

const Role = styled.p`
  margin: 0;
`;

export default FrontPersonCard;
