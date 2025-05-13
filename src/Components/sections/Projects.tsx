import styled from "styled-components";
import StyledMain from "../StyledMain";
import StyledTitle from "../Title";

const ProjectsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

    @media screen and (max-width: 1000px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const ProjectsList = styled.div`
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;
    font-size: calc(2px + 2vw);

    @media screen and (max-width: 1000px) {
        align-self: center;
        width: 90%;
        margin: 1vh 1vw;
        font-size: calc(2.5px + 2.5vw);
    }
`;

export default function Projects() {
    return (
        <StyledMain>
            <StyledTitle>Projects</StyledTitle>
            <ProjectsContainer>
                <ProjectsList>
                <ul>
                    <li>Gradescope Grade Calculator Extension
                        <ul>
                            <li>Engineered Chrome extension deploying JavaScript and Chrome API to integrate with Gradescope</li>
                            <li>Designed user-friendly popup interface using HTML, CSS, and JavaScript</li>
                        </ul>
                    </li>
                    <br></br>
                    <li>BlackBalannce
                        <ul>
                            <li></li>
                        </ul>
                    </li>
                </ul>
                </ProjectsList>
            </ProjectsContainer>
        </StyledMain>
    )
}