import { NewTitleBlock, ContentBlock } from '../../components';
import MissionBlock from './MissionBlock';
import ValuesBlock from './ValuesBlock';

import content from '../../static/json/about';

const About = () => {
  return (
    <>
      <NewTitleBlock content={content.titleBlock}></NewTitleBlock>
      <ContentBlock title='Mission Statement' changeBackground>
        <MissionBlock content={content.mission}></MissionBlock>
      </ContentBlock>
      <ContentBlock title="Our Values" >
        <ValuesBlock content={content.values}></ValuesBlock>
      </ContentBlock>
    </>
  );
};

export default About;
