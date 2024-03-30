import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

interface ValuesBlockProps {
  content: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
}

const ValuesBlock = (props: ValuesBlockProps) => (
  <ValuesBlockDiv>
    {props.content.map((value, index) => (
      <ValueDiv key={uuidv4()}>
        <ValueContent>
          <ValueTitle>{value.title}</ValueTitle>
          <Description>{value.description}</Description>
        </ValueContent>
        <Image src={value.image.src} alt={value.image.alt}></Image>
      </ValueDiv>
    ))}
  </ValuesBlockDiv>
);

const ValueDiv = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 30px;
  align-items: center;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    gap: 150px;
  }
`;

const ValueContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 0;
  flex-grow: 0.9;
`;

const ValueTitle = styled.h2`
  color: #0078e8;
  margin-bottom: 0;
  @media ${(props) => `${props.theme.viewport.mobile}`} {
    font-size: ${(props) => props.theme.fontSizes.small2};
  }
`;

const Image = styled.img`
  height: auto;
  width: 150px;
  margin-left: 0px;
  margin-right: 0px;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    width: 175px;
  }
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    font-size: ${(props) => props.theme.fontSizes.small2};
  }
  margin: 0;
`;

const ValuesBlockDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;

  & > ${ValueDiv}:nth-child(even) {
    flex-direction: row-reverse;
    > ${ValueContent} > ${ValueTitle} {
      margin-left: auto;
    }
    > ${ValueContent} > ${Description} {
      text-align: right;
    }
    > ${Image} {
      margin-right: 0px;
      margin-left: 0px;
    }
  }

  @media only screen and (max-width: 1100px) {
    margin: 25px 0px;
    > ${ValueDiv} > ${ValueContent} > ${ValueTitle} {
      margin: 0 auto;
    }
    > ${ValueDiv} {
      flex-direction: column-reverse !important;
      align-items: center;
    }
    > ${ValueDiv} > ${ValueContent} > ${Description} {
      text-align: center !important;
      margin: 10px 0;
    }
    > ${ValueDiv} > ${Image} {
      margin: 10px 30px !important;
    }
  }
`;

export default ValuesBlock;
