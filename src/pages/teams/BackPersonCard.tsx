import styled from 'styled-components';

import { PersonProps } from './PersonCard';

import LinkedinLogo from '../../static/images/linkedin.svg';
import InstagramLogo from '../../static/images/instagram.svg';
import GithubLogo from '../../static/images/github.svg';

type ProjectInfo = {
  color: string;
  href: string;
};

const projectInfo: { [key: string]: ProjectInfo } = {
  Beneficent: { color: '#ff9800', href: '/beneficent' },
  'Urban Minds': { color: '#2196f3', href: '/urbanminds' },
  'Allo Canada': { color: '#4caf50', href: '/allocanada' },
  Website: { color: '#f44336', href: '/' },
};

const createColoredBadge = (projectName: string) => {
  return (
    <a href={projectInfo[projectName].href} target='_blank'>
      <Badge projectName={projectName}>{projectName}</Badge>
    </a>
  );
};

const Projects = (projects: string[]) => (
  <>
    <SectionTitle>Projects</SectionTitle>
    <ProjectsContainer>
      {projects.map((project) => createColoredBadge(project))}
    </ProjectsContainer>
  </>
);

const SocialIconButton = (href: string, src: string, alt: string) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    <SocialIcon src={src} alt={alt} />
  </a>
);

const BackPersonCard = (props: PersonProps) => (
  <Container>
    <Name>{props.name}</Name>
    <Description>{props.description}</Description>
    {props.projects && Projects(props.projects)}
    <DateJoinedSection>
      <SectionTitle>Member Since</SectionTitle>
      <p>{props.startDate}</p>
    </DateJoinedSection>
    <Socials>
      {props.linkedin &&
        SocialIconButton(
          props.linkedin,
          LinkedinLogo,
          'LinkedIn logo, links to LinkedIn profile'
        )}
      {props.github &&
        SocialIconButton(
          props.github,
          GithubLogo,
          'Github logo, links to Github profile'
        )}
      {props.instagram &&
        SocialIconButton(
          props.instagram,
          InstagramLogo,
          'Instagram logo, links to Instagram profile'
        )}
    </Socials>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 25px;
  height: 100%;
  pointer: cursor;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Name = styled.h2`
  color: ${(props) => props.theme.colors.primaryBlue};
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  margin: 0 0 20px 0;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const DateJoinedSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.h4`
  color: ${(props) => props.theme.colors.primaryBlue};
  margin: 0;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  &:hover,
  &:active {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

interface BadgeProps {
  projectName: string;
}

const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  border: 2px solid;
  border-color: ${(props) => projectInfo[props.projectName].color || '#888'};
  color: black;
  font-weight: bold;
  font-size: 0.7rem;
  width: fit-content;
  margin: 0 5px 5px 0;
  &:hover {
    transition: 0.3s;
    background-color: ${(props) =>
      projectInfo[props.projectName].color || '#888'};
  }
`;

export default BackPersonCard;
