import styled from 'styled-components';

interface MissionBlockProps {
    content: {
        image: {
            src: string;
            alt: string;
        };
        description: string;
    };
}

const MissionBlock = (props: MissionBlockProps) => (
    <FlexContainer>
    <MissionBlockDiv>
        <Image src={props.content.image.src} alt={props.content.image.alt}></Image>
        <Description>{props.content.description}</Description>
    </MissionBlockDiv>
    </FlexContainer>
);

//fine for now but need to be made responsive

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const MissionBlockDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: space-between;
    align-items: center;
    @media ${(props) => `${props.theme.viewport.laptop}`} {
        flex-grow: 1;
        flex-direction: row;
    }
`

const Image = styled.img`
    height: auto;
    width: 55%;
    margin: 50px;
    @media ${(props) => `${props.theme.viewport.laptop}`} {
        margin: 50px 50px 50px 0;
        width: 30%;
    }
`;

const Description = styled.p`
    margin: 0;
    
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.small};
    @media ${(props) => `${props.theme.viewport.laptop}`} {
        text-align: right;
        margin: 50px 0px 50px 0px;
        width: 55%;
        font-size: 1.6em;
    }
`;

export default MissionBlock;