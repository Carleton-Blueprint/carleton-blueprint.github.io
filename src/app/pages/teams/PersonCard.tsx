import styled from 'styled-components';
import { useState } from 'react';
import FrontPersonCard from './FrontPersonCard';
import BackPersonCard from './BackPersonCard';

export interface PersonProps {
  name: string;
  position: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  picture: string;
  description?: string;
  projects?: string[];
  startDate: string;
}

const PersonCard = (props: PersonProps) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const content = toggle ? (
    <BackPersonCard {...props} />
  ) : (
    <FrontPersonCard {...props} />
  );

  // mirah was here

  return (
    <Container>
      <CardFace toggle={toggle} onClick={handleToggle}>
        {content}
      </CardFace>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  -webkit-perspective: 1000px;
  perspective: 1000px;
`;

type CardFaceProps = {
  toggle: boolean;
};

const CardFace = styled.div<CardFaceProps>`
  border-radius: 10px;
  padding-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -1px 4px 14px -2px rgba(51, 51, 51, 0.66);
  -webkit-box-shadow: -1px 4px 14px -2px rgba(51, 51, 51, 0.66);
  -moz-box-shadow: -1px 4px 14px -2px rgba(51, 51, 51, 0.66);
  background-color: white;
  &:hover,
  &:active {
    cursor: pointer;
    box-shadow: -1px 4px 14px -2px rgba(57, 136, 255, 0.66);
    -webkit-box-shadow: -1px 4px 14px -2px rgba(57, 136, 255, 0.66);
    -moz-box-shadow: -1px 4px 14px -2px rgba(57, 136, 255, 0.66);
  }
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  transition: transform 300ms ease-out;
  transform: ${(props) => (props.toggle ? 'rotateY(-180deg)' : 'rotateY(0)')};
`;

export default PersonCard;
