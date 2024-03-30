import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import listIcon from './list.svg';
import listCloseIcon from './listClose.svg';

interface MobileMenuProps {
  links: string[];
}

interface MenuButtonProps {
  open: boolean;
  handleToggle: () => void;
}

interface MenuListProps {
  links: string[];
  open: boolean;
  closeList: () => void;
}

interface StyledListProps {
  isOpen: boolean;
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    console.log(open);
    setOpen(!open);
  };
  return (
    <div>
      <MenuButton open={open} handleToggle={handleToggle} />
      <MenuList links={links} open={open} closeList={handleToggle} />
    </div>
  );
};

const MenuButton = ({ open, handleToggle }: MenuButtonProps) => {
  return (
    <StyledMenuListDiv open={open}>
      <button className='headerListButton' onClick={handleToggle}>
        <img src={open ? listCloseIcon : listIcon} />
      </button>
    </StyledMenuListDiv>
  );
};

const MenuList = ({ links, open, closeList }: MenuListProps) => {
  return (
    <>
      <StyledHeaderList isOpen={open}>
        <>
          {links.map((link) => (
            <StyledHeaderLink key={`l-${link}`} onClick={closeList}>
              <Link to={link} className='headerListLink'>
                {link}
              </Link>
            </StyledHeaderLink>
          ))}
        </>
      </StyledHeaderList>
    </>
  );
};

type StyledMenuListDivProps = {
  open: boolean;
};
const StyledMenuListDiv = styled.div<StyledMenuListDivProps>`
  button.headerListButton {
    background: transparent;
    border: none;
    color: white;
    height: 50px;
  }
  text-align: end;
  padding-right: 5px;
  position: absolute;
  right: 20px;
  ${(props) => props.open == true && 'right: calc(20vw + 20px);'}
  top: 20px;
  z-index: 2;
`;

const StyledHeaderList = styled.div<StyledListProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.cloudBlue};
  padding: 10px 10px 10px 10px;
  text-align: end;
  border-bottom-left-radius: 5px;
  box-shadow: -2px 2px 5px 0px lightgrey;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 20vw;
`;

const StyledHeaderLink = styled.div`
  a.headerListLink {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryBlue};
  }
  a:hover {
    color: ${(props) => props.theme.colors.skyBlue};
  }
`;

export default MobileMenu;
