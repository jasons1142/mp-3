import styled from "styled-components";
import StyledMain from "../StyledMain";
import StyledTitle from "../Title";

const ActivitiesContainer = styled.div`
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

const ActivitiesList = styled.div`
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

export default function Activities() {
    return (
        <StyledMain>
            <StyledTitle>Activities</StyledTitle>
            <ActivitiesContainer>
                <ActivitiesList>
                <ul>
                    <li>Iota Phi Theta Fraternity, Incorporated
                        <ul>
                            <li>Chapter Present 2025-</li>
                            <li>Coordinated chapter meetings and chapter sanctioned events</li>
                        </ul>
                    </li>
                    <li>NSBE</li>
                    <li>ColorStack</li>
                </ul>
                </ActivitiesList>
            </ActivitiesContainer>
        </StyledMain>
    )
}