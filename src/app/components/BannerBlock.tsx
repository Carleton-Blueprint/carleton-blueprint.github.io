import styled from "styled-components";
import Button from "./Button";
import contactContent from "../static/json/contact";
import aboutContent from "../static/json/about";
import projectContent from "../static/json/projects";
import { usePathname } from "next/navigation";

type Content = {
  text: string;
  button: {
    content: string;
    link: string;
  };
};

const contentMap: { [key: string]: Content } = {
  contact: contactContent.banner,
  about: aboutContent.banner,
  projects: projectContent.banner,
};

const BannerBlock = () => {
  const location = usePathname();
  const currentPage = location.split("/")[1].toLowerCase();

  const content = contentMap[currentPage];

  if (content) {
    return (
      <ApplicationDiv>
        <FlexContainer>
          <Text>{content.text}</Text>
        </FlexContainer>
        <FlexContainer>
          <Button text={content.button.content} link={content.button.link}></Button>
        </FlexContainer>
      </ApplicationDiv>
    );
  }

  return null;
};
const ApplicationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.offWhite};
  @media ${(props) => props.theme.viewport.laptop} {
    flex-direction: row;
    gap: 22vw;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const Text = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryBlue};
  width: 75%;
  @media ${(props) => props.theme.viewport.laptop} {
    width: 100%;
  }
`;

export default BannerBlock;
