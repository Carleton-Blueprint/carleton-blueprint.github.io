import styled from 'styled-components';
import { ContentBlock, NewTitleBlock, HomeBlock, HomeProjectsBlock } from '../../components';

import content from '../../static/json/home';

const Home = () => (
  <PageBody>
    <NewTitleBlock content={content.titleBlock}></NewTitleBlock>
    <ContentBlock title={content.aboutBlock.title} changeBackground>
      <HomeBlock content={content.aboutBlock}></HomeBlock>
    </ContentBlock>
    <ContentBlock title={content.projectsBlock.title}>
      <HomeProjectsBlock content={content.projectsBlock}></HomeProjectsBlock>
    </ContentBlock>
    <ContentBlock title={content.getInvolvedBlock.title} changeBackground>
      <HomeBlock content={content.getInvolvedBlock}></HomeBlock>
    </ContentBlock>
    <ContentBlock title={content.contactUsBlock.title}>
      <HomeBlock content={content.contactUsBlock}></HomeBlock>
    </ContentBlock>
  </PageBody>
);

const PageBody = styled.div`
  background-color: #f8fbff;
`;

export default Home;
