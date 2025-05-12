import styled from "styled-components";
import StyledMain from "../StyledMain";
import StyledTitle from "../Title";

const ExperiencesContainer = styled.div`
    display: flex;
    padding: 2vh 2vw;
    flex: 1;

    @media screen and (max-width: 1000px) {
        padding: 2vh 4vw;
        flex-direction: column;
    }
`;

const ExperiencesList = styled.div`
    max-width: 800pc;
    width: 100%;
    font-size: clamp(1rem, 2.5vw, 1.5rem)
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