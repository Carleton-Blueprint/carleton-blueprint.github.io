"use client"; // replace useEffect and const name = "beneficient"

import { useState, useEffect } from "react";
import styled from "styled-components";
// import {useParams} from "react-router-dom";
import NewTitleBlock from "../../components/NewTitleBlock";
import ContentBlock from "../../components/ContentBlock";
import { projectDetails, IProject } from "../../static/json/projectDetails";

const ProjectDetails = () => {
  const name = "Beneficient";
  // const {name} = useParams();

  const [project, setProject] = useState<IProject>(projectDetails.pastProjects.Beneficient);

  const projects: { [key: string]: IProject } = Object.assign({}, projectDetails.currentProjects, projectDetails.pastProjects);

  useEffect(() => {
    if (name !== undefined) {
      setProject(projects[name]);
    }
  }, [name]);

  const titleBlockContent = {
    title: project.name,
    subtitle: project.description,
    image: {
      picture: project.image,
      alt: `${project.name} Project Logo`,
      border: true,
    },
    buttons: [
      {
        content: `Project Website`,
        link: project.deployedLink,
      },
      {
        content: `Project Gitlab`,
        link: project.gitlabLink,
      },
    ],
  };

  const problemContent = <ContentText>{project.problem}</ContentText>;
  const solutionContent = project.solutionImage ? (
    <ContentFlex>
      {" "}
      <ContentText>{project.solution}</ContentText> <SolutionImage src={project.solutionImage} alt={"Mockup of the completed solution"} />
    </ContentFlex>
  ) : (
    <ContentText>{project.solution}</ContentText>
  );

  return (
    <>
      <NewTitleBlock content={titleBlockContent} />
      <ContentBlock title="The Problem" children={problemContent}></ContentBlock>
      <ContentBlock title="The Solution" children={solutionContent}></ContentBlock>
    </>
  );
};

const ContentFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10%;
  margin-top: 20px;
  align-items: center;
`;

const SolutionImage = styled.img`
  width: 100%;
  @media ${(props) => props.theme.viewport.tablet} {
    width: 70%;
  }
  border: solid 1px black;
`;

const ContentText = styled.p`
  padding: 20px 0;
  margin: auto;
`;

export default ProjectDetails;
