import styled from 'styled-components';
import Button from './Button';
import stockImage from '../static/images/Construction-pana.svg';

const UnderConstruction = () => {
    return (
    <UnderConstructionDiv>
        <Image src={stockImage} alt='Under Construction'></Image>
        <StyledLink href="https://storyset.com/work">Work illustrations by Storyset</StyledLink>
        <h1>We're working on this!</h1>
        <h3>Sorry, our website is still under construction. You might be able to find what you are looking for here</h3>
        <a href="https://linktr.ee/cublueprint">Visit our Linktree</a>
    </UnderConstructionDiv>
    );
};

const UnderConstructionDiv = styled.div`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px;
    text-align: center;
`;

const StyledLink = styled.a`
    font-size: 8px;
    color: #000000;
    text-decoration: none;
    margin-top: 24px;

`;

const Image = styled.img`
    width: 250px;
    height: auto;
    margin: 0 0 24px 0;
    @media ${(props) => props.theme.viewport.laptop} {
        width: 500px;
    }
`;

export default UnderConstruction;