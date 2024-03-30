import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentBlockProps {
  title: string;
  changeBackground?: boolean;
  children: ReactNode;
}

const ContentBlock = (props: ContentBlockProps) => (
  <ContentBody changeBackground={props.changeBackground}>
    <ContentTitle changeBackground={props.changeBackground}>{props.title}</ContentTitle>
    <Content>{props.children}</Content>
  </ContentBody>
);

interface ContentBodyProps {
  changeBackground?: boolean;
}

const ContentBody = styled.div<ContentBodyProps>`
  background-color: ${(props) =>
    props.changeBackground
      ? props.theme.colors.cloudBlue
      : props.theme.colors.lightBlue};
  padding: 50px;
`;

const ContentTitle = styled.h3<ContentBodyProps>`
  font-family: ${(props) => props.theme.fonts.heading};
  margin: auto;
  padding: 10px 0px;
  border-radius: 15px;
  max-width: 50em;
  background-color: ${(props) => props.changeBackground
      ? props.theme.colors.skyBlue
      : props.theme.colors.cloudBlue};
  text-align: center;
  @media ${(props) => props.theme.viewport.laptop} {
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    font-size: 1.49em;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 72em;
  margin-left: auto;
  margin-right: auto;
`;

export default ContentBlock;
