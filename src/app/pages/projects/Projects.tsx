import styled from 'styled-components';

import {NewTitleBlock, ContentBlock} from '../../components';
import ProjectsTextMultiCarousel from '../../components/ProjectsTextMultiCarousel';

import content from '../../static/json/projects';

const Projects = () => (
  <PageBody>
    <NewTitleBlock content={content.titleBlock}></NewTitleBlock>
    <ContentBlock title='Current Projects' changeBackground>
      <ProjectsTextMultiCarousel content={content.currentProjects} />
    </ContentBlock>
    <ContentBlock title="Past Projects" >
      <ProjectsTextMultiCarousel content={content.pastProjects} />
    </ContentBlock>
  </PageBody>
);

const PageBody = styled.div`
  background-color: ${(props) => props.theme.colors.cloudBlue};
  background-color: #f8fbff;
`;

export default Projects;
