import styled from "styled-components";
import StyledMain from "../StyledMain";
import StyledTitle from "../Title";

const ActivitiesTextContainer = styled.div`
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;

    @media screen and (max-width: 1000px) {
        align-self: center;
        width: 90%;
        margin: 1vh 1vw;
        font-size: 24px;
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
                        In my free time I enjoy a variety of activities. In school
                        I am apart of NSBE and a member of ColorStack. Outside of school
                        I enjoy playing sports, particularly basketball. I also enjoy the gym and
                        video games.
                    </ActivitiesText>
                </ActivitiesTextContainer>
        </StyledMain>
    )
}