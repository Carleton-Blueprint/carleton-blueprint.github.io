import styled from "styled-components";
import { HomeBlockProps } from "../interfaces/HomeBlockProps";
import Button from "./Button";
import NextImage, { StaticImageData } from "next/image";

const HomeBlock = (props: HomeBlockProps) => {
  let styling =
    props.content.style === "right"
      ? `    
  text-align: right;
  grid-template-columns: 2fr 3fr;
  grid-template-areas:
    'Image Description'
    'Image Buttons';
  `
      : `    
  text-align: left;
  grid-template-columns: 3fr 2fr;
  grid-template-areas:
    'Description Image'
    'Buttons Image';
  `;
  let HomeBlockDiv = styled.div`
    padding: 50px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "Description"
      "Image"
      "Buttons";

    @media ${(themeProps) => `${themeProps.theme.viewport.tablet}`} {
      ${styling}
    }
    @media ${(props) => `${props.theme.viewport.monitor}`} {
      width: 72em;
      margin: auto;
    }
  `;

  const Buttons = styled.div`
    margin: auto;
    margin-bottom: 2em;
    @media ${(themeProps) => `${themeProps.theme.viewport.tablet}`} {
      margin-${props.content.style ? props.content.style : "left"}: 0;
    }
  `;
  return (
    <HomeBlockDiv>
      <Image src={props.content.image.picture} alt={props.content.image.alt} />
      <Description>{props.content.subtitle}</Description>
      <Buttons>
        {props.content.buttons.map((button) => (
          <Button key={`t-${button.content}`} link={button.link} text={button.content}></Button>
        ))}
      </Buttons>
    </HomeBlockDiv>
  );
};

const Description = styled.div`
  grid-area: Description;
  margin: 0;
  margin-top: auto;
  font-size: ${(props) => props.theme.fontSizes.small};
  @media ${(themeProps) => `${themeProps.theme.viewport.mediumMobile}`} {
    font-size: ${(themeProps) => themeProps.theme.fontSizes.regular};
  }
`;

const Image = ({ src }: { src: StaticImageData }) => {
  const Container = styled.div`
    position: relative;
    width: 100%;
  `;
  return (
    <Container>
      <NextImage src={src} alt="some image" />
    </Container>
  );
};

export default HomeBlock;
