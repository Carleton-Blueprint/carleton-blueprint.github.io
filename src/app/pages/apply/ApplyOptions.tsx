import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ApplicationTextProps {
  title: string;
  body: string;
  linkText: string;
  url: string;
}

const ApplyOptions = ({ title, body, linkText, url }: ApplicationTextProps) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/${url}`);

  return (
    <Container onClick={handleClick}>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <InterestedText>{linkText}</InterestedText>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  border: 1px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 10px;
  padding: 20px;
  &:hover {
    -webkit-box-shadow: 2px 5px 18px 0px
      ${(props) => props.theme.colors.primaryBlue}80;
    box-shadow: 2px 5px 18px 0px ${(props) => props.theme.colors.primaryBlue}80;
  }
  transition: 0.3s;
  cursor: pointer;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 36px;
  margin: 0;
`;

const Body = styled.p`
  margin-top: 0;
`;

const InterestedText = styled.p`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: 800;
  margin: 0;
`;

export default ApplyOptions;
