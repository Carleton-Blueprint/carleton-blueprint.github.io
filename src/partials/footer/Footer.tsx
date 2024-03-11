import styled from 'styled-components';
import content from '../../static/json/footer';
import { Link } from 'react-router-dom';

const Footer = () => (
  <FooterContainer>
    <FlexContainer>
      <Column>
        {content.links.slice(0, 3).map((link) => (
          <div>
            <FooterTitle to={link.link}>{link.name}</FooterTitle>
          </div>
        ))}
      </Column>
      <Column>
        {content.links.slice(3).map((link) => (
          <div>
            <FooterTitle to={link.link}>{link.name}</FooterTitle>
          </div>
        ))}
      </Column>
      <Column>
        <BlueprintLogo src={content.blueprintIcon} alt='blueprint' />
        <p>stay in the loop</p>
        {content.social.map((socialLink) => (
          <a
            href={socialLink.url}
            target='_blank'
            rel='noopener noreferrer'
            key={socialLink.key}
          >
            <SocialIcon src={socialLink.img} alt='icons' />
          </a>
        ))}
      </Column>
    </FlexContainer>

    <MadeWithLove>Made with ❤️ by The Blueprint Team</MadeWithLove>
  </FooterContainer>
);

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlue};
  color: ${(props) => props.theme.colors.offWhite};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const FlexContainer = styled.div`
  padding-top: 20px;

  @media ${(props) => `${props.theme.viewport.laptop}`} {
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
  }
`;

const Column = styled.div`
  margin: 50px 100px 10px 100px;
  text-align: center;
  font-weight: bold;
`;

const FooterTitle = styled(Link)`
  height: 35px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.offWhite};
  &:hover {
    color: white;
  }
`;

const BlueprintLogo = styled.img`
  height: 35px;
`;

const SocialIcon = styled.img`
  width: auto;
  height: 20px;
  margin-right: 10px;
  filter: invert(87%) sepia(70%) saturate(5510%) hue-rotate(177deg)
    brightness(106%) contrast(104%);
  &:hover {
    filter: invert(98%) sepia(6%) saturate(2%) hue-rotate(208deg)
      brightness(116%) contrast(100%);
  }
`;

const MadeWithLove = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlue};
  text-align: center;
  padding: 20px 0;
`;

export default Footer;
