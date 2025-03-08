import styled from "styled-components";
import StyledMain from "../StyledMain";
import StyledTitle from "../Title";

const ExperiencesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;
`;

const ExperiencesList = styled.div`
    align-self: center;
    width: 60%;
    font-size: calc(2.5px + 2.5vw);

    @media screen and (max-width: 1000px) {
        align-self: center;
        width: 90%;
        margin: 1vh 1vw;
        font-size: calc(2.75px + 2.75vw);
    }
`;

export default function Experiences() {
    return (
        <StyledMain>
            <StyledTitle>Work Experience</StyledTitle>
            <ExperiencesContainer>
                <ExperiencesList>
                    <ul>
                        <li>Office Assistant, Sep 2024 - Present
                            <ul>
                                <li>Managed communication with prospective international students</li>
                                <li>Demonstrated strong organizational skills</li>
                            </ul>
                        </li>
                        <li>Brand Associate, May 2021- May 2023
                            <ul>
                                <li>Acquired over 150 credit card sign-ups</li>
                                <li>Maintainted cleanliness throughout store</li>
                            </ul>
                        </li>
                    </ul>
                </ExperiencesList>
            </ExperiencesContainer>
        </StyledMain>
    )
}