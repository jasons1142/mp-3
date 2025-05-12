import styled from "styled-components";
import StyledMain from "../StyledMain";
import StyledTitle from "../Title";

const ActivitiesTextContainer = styled.div`
    display: flex;
    padding: 2vh 2vw;
    flex: 1;

    @media screen and (max-width: 1000px) {
        padding: 2vh 4vw;
        flex-direction: column;
    }
`;

const ActivitiesText = styled.p`
    font-size: 40px;

    @media screen and (max-width: 1000px) {
        font-size: 40px;
    }
`;

export default function Activities() {
    return (
        <StyledMain>
            <StyledTitle>Activities</StyledTitle>
                <ActivitiesTextContainer>
                    <ActivitiesText>
                        Some of my educational activities are Iota Phi Theta Fraternity,
                        Incorporate, NSBE, and ColorStack. For my fraternity I serve as the 
                        chapter president and for NSBE and ColorStack I am an active member 
                        and participant in all events.
                    </ActivitiesText>
                </ActivitiesTextContainer>
        </StyledMain>
    )
}