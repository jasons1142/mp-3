import { styled } from "styled-components";

const StyledHeader = styled.header`
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    margin: 0;
    background-color: #0a192f;
    color: white;

    @media screen and (max-width: 750px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledH1 = styled.h1`
`;

const StyledP = styled.p`
`;

export default function Header() {
    return (
        <StyledHeader> 
            <StyledH1>Jason Senecharles's Online Resume</StyledH1>
            <StyledP>Welcome to my Online Resume</StyledP> 
        </StyledHeader>
    )
}
