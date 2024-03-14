import styled from 'styled-components';
import blueprintIcon from '../../static/images/blueprint.png';
import ApplicationText from './ApplyOptions';
import UnderConstruction from '../../components/UnderConstruction';

const Apply = () => {
  return (
    <Container>
    {/*<TitleContainer>
        <StyledBlueprintImage alt='Blueprint' src={blueprintIcon} />
        <Title>blueprint</Title>
        <Subtitle>Come work with us!</Subtitle>
    </TitleContainer>

    <BodyContainer>
        <SectionHeader>I am:</SectionHeader>
        <ApplicationTextContainer>
          <ApplicationText
            title={'Non Profit'}
            body={
              'Looking for a group of volunteer student developers to help with my software needs'
            }
            url={'apply/non-profit'} // SHOULD WE REPLACE DIRECTLY WITH A TYPEFORM/GOOGLE FORM LINK?
            linkText={'Learn more!'}
          />
          <ApplicationText
            title={'Student'}
            body={
              'Looking to develop my skills and contribute to my community with like-minded peers'
            }
            url={'apply/student'}
            linkText={'Learn more!'}
          />
        </ApplicationTextContainer>
    </BodyContainer> */}
      <UnderConstruction></UnderConstruction>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80vw;
  padding: 50px 0;

  @media ${(props) => props.theme.viewport.laptop} {
    width: 820px;
  }
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-areas:
    'Logo Title'
    'Logo Subtitle';
  grid-gap: 0 2vw;

  @media ${(props) => props.theme.viewport.mobile} {
    grid-template-rows: 80% 20%;
  }

  @media ${(props) => props.theme.viewport.laptop} {
    grid-gap: 0 20px;
  }
`;

const StyledBlueprintImage = styled.img`
  grid-area: Logo;
  padding-top: 10%;
  height: auto;
  width: 100%;

  @media ${(props) => props.theme.viewport.laptop} {
    width: 205px;
  }
`;

const Title = styled.h1`
  grid-area: Title;
  margin: 0;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 13vw;

  @media ${(props) => props.theme.viewport.laptop} {
    font-size: 133px;
  }
`;

const Subtitle = styled.p`
  grid-area: Subtitle;
  margin: 0;
  font-size: 3vw;

  @media ${(props) => props.theme.viewport.laptop} {
    font-size: 31px;
  }
`;

const BodyContainer = styled.div`
  padding: 40px 0;
  // add some default styling for views smaller than mobile
  @media ${(props) => props.theme.viewport.mobile} {
    grid-gap: 0 2vw;
    grid-template-columns: 20vw 58vw;
    grid-template-rows: 80% 20%;
  }
`;

const SectionHeader = styled.h2`
  margin: 0;
  margin-bottom: 50px;

  @media ${(props) => props.theme.viewport.tablet} {
    font-size: 3vw;
  }

  @media ${(props) => props.theme.viewport.laptop} {
    font-size: 31px;
  }
`;

const ApplicationTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px 40px;

  @media ${(props) => props.theme.viewport.mobile} {
    flex-wrap: wrap;
  }
  @media ${(props) => props.theme.viewport.tablet} {
    flex-wrap: nowrap;
  }
`;

export default Apply;
