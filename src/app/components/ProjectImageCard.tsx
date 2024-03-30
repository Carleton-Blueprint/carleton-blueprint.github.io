import styled from 'styled-components';
import Button from './Button';

interface ProjectProps {
  props: {
    name: string;
    description: string;
    link: string;
    image: any;
  };
}

const ProjectImageCard = ({ props }: ProjectProps) => {
  return (
    <CardDiv className='project'>
      <div>
        <Picture src={props.image} alt={`${props.name}`} />
        <Name>{props.name}</Name>
      </div>
      <BackOfCard>
        <Description>{props.description}</Description>
        <StyledButton
          key={`t-${props.name}`}
          link={props.link}
          text={'Learn More'}
        ></StyledButton>
      </BackOfCard>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  border: ${(props) => props.theme.colors.borderBlue} solid 5px;
  border-radius: 3px;
  position: relative;
  height: 100%;
`;

const StyledButton = styled(Button)`
  margin: auto;
`;

const Picture = styled.img`
  width: 90%;
  margin: auto;
  display: block;
`;

const Name = styled.h2`
  margin: 10px;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: 700;
  position: absolute;
  bottom: 0;
`;

const Description = styled.h2`
  color: ${(props) => props.theme.colors.textBlack};
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.small};
`;
const BackOfCard = styled.div`
  display: none;
  @media ${(props) => `${props.theme.viewport.hover}`} {
    cursor: pointer;
    display: unset;
    background-color: ${(props) => props.theme.colors.cloudBlue};
    opacity: 0;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: ease-in 0.3s;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export default ProjectImageCard;
