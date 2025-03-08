import { styled } from "styled-components";
import StyledMain from "../StyledMain";
import StyledTitle from "../Title";

const EducationList = styled.ul`
    align-self: left;
    width: 60%;
    margin: 1vh 1vw;
    font-size: calc(2.5px + 2.5vw);

    @media screen and (max-width: 1000px) {
        align-self: left;
        width: 90%;
        margin: 1vh 1vw;
        font: 50px;
        font-size: calc(4px + 4vw);
    }
`;

export default function Education() {
    return (
        <StyledMain>
            <StyledTitle>Educational Background</StyledTitle>
            <EducationList>
                <ul>
                    <li>B.A in Computer Science, Boston University May 2026</li>
                        <ul>
                            <li>Relevant Coursework: DSA, Computer Systesm, SWE, Web Development</li>
                        </ul>
                    <li>High School Diploma, Boston Latin School June 2022</li>
                    <li>Middle School, Richard J. Murphy June 2026</li>
                </ul>
            </EducationList>
        </StyledMain>
    )
}