import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import blueprintIcon from '../../static/images/blueprint_banner_negative.webp';
import MobileMenu from './MobileMenu';
//new header

interface HeaderProps {
  links: string[];
}

const Header = ({ links }: HeaderProps) => (
  <StyledHeaderBackground>
    <StyledHeader>
      <BlueprintIcon link={links[0]} />
      <StyledHeaderList>
        {links.map((link) => (
          <StyledHeaderLink key={`l-${link}`}>
            <NavLink to={link}>{link}</NavLink>
          </StyledHeaderLink>
        ))}
      </StyledHeaderList>
      <StyledMobileMenu>
        <MobileMenu links={links} />
      </StyledMobileMenu>
    </StyledHeader>
  </StyledHeaderBackground>
);

const BlueprintIcon = (props: { link: string }) => (
  <Link to={props.link}>
    <StyledBlueprintImage alt='Blueprint' src={blueprintIcon} />
  </Link>
);

const StyledHeaderBackground = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlue};
  z-index: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 90px;
  display: flex;
  padding-left: 50px;
  @media ${(props) => props.theme.viewport.laptop} {
    padding: 0px 50px;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 72em;

  color: ${(props) => props.theme.colors.offWhite};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledHeaderList = styled.div`
  display: none;

  @media ${(props) => props.theme.viewport.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1vw;
  }
`;

const StyledMobileMenu = styled.div`
  @media ${(props) =>
      `${props.theme.viewport.mobile} , ${props.theme.viewport.tablet}`} {
    display: flex;
  }

  @media ${(props) => props.theme.viewport.laptop} {
    display: none;
  }
`;

const StyledHeaderLink = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.offWhite};
  }
  a.active {
    color: #ffffff;
    padding-bottom: 2px;
    border-bottom: 3px solid #fff;
    transition: 0.2s ease-in-out;
  }
  a:hover {
    color: #ffffff;
    transition: 0.2s ease-in-out;
  }
`;

const StyledBlueprintImage = styled.img`
  margin-top: 10px;
  max-width: 150px;
`;

export default Header;
