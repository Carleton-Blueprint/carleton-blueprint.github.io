"use client";

import styled from "styled-components";
import Button from "./Button";

interface TitleBlockProps {
  content: {
    title: string;
    subtitle: string;
    image: {
      picture: any;
      alt: string;
      border?: boolean;
    };
    buttons: {
      content: string;
      link: string;
    }[];
  };
}

const NewTitleBlock = (props: TitleBlockProps) => (
  <Background>
    <TitleBlockDiv>
      <LeftFlex>
        <Title>{props.content.title}</Title>
        <Description>{props.content.subtitle}</Description>
        <Buttons>
          {props.content.buttons.map((button) => (
            <Button key={`t-${button.content}`} link={button.link} text={button.content}></Button>
          ))}
        </Buttons>
      </LeftFlex>
      {props.content.image.border ? (
        <PictureWrapper>
          <Picture src={props.content.image.picture} alt={props.content.image.alt} />
        </PictureWrapper>
      ) : (
        <Image src={props.content.image.picture} alt={props.content.image.alt} />
      )}
    </TitleBlockDiv>
  </Background>
);

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

const Buttons = styled.div`
  margin: auto;
  @media ${(props) => `${props.theme.viewport.widerMobile}`} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    margin-left: 0;
  }
`;

const TitleBlockDiv = styled.div`
  @media ${(props) => props.theme.viewport.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 50px 50px 100px 50px;
  max-width: 72em;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
`;

const LeftFlex = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 0;
  font-size: ${(props) => props.theme.fontSizes.medium2};
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    font-size: ${(props) => props.theme.fontSizes.larger};
  }
`;

const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.content};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: 50px;
  width: 100%;
  line-height: 2em;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    font-size: ${(props) => props.theme.fontSizes.small2};
  }
`;

const PictureWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: ${(props) => props.theme.colors.cloudBlue} 20px solid;
  background-color: white;
  margin: auto;
  padding: 3vw;

  @media ${(props) => `${props.theme.viewport.laptop}`} {
    padding: 0;
    margin: 0 10%;
    height: 300px;
  }
`;

const Picture = styled.img`
  width: 70%;
  margin: auto;
  display: block;
`;

const Image = styled.img`
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    max-width: 42%;
  }
  width: 100%;
`;

const ButtonFlex = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
  gap: 10px;
  @media ${(props) => `${props.theme.viewport.widerMobile}`} {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    justify-content: start;
  }
`;

export default NewTitleBlock;
