import styled from 'styled-components';
import { NewTitleBlock, ContentBlock } from '../../components';

import content from '../../static/json/teams';
import PersonCard from './PersonCard';
import UnderConstruction from '../../components/UnderConstruction';

const Teams = () => (
  <Container>
    {/*<NewTitleBlock content={content.titleBlock}></NewTitleBlock>
    <>
      {content.teamsList.map((team, index) => (
        <ContentBlock title={team.name} changeBackground={!index}>
          <TeamFlexBox>
            {team.members.map((person) => (
              <PersonCard {...person} />
            ))}
          </TeamFlexBox>
        </ContentBlock>
      ))}
            </>*/}
        <UnderConstruction></UnderConstruction>
  </Container>
);

const Container = styled.div`
  margin: auto;
  width: 80vw;
  padding: 50px 0;

  @media ${(props) => props.theme.viewport.laptop} {
    width: 820px;
  }
`;

const TeamFlexBox = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

export default Teams;
