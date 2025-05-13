import styled from "styled-components";
import StyledMain from "../StyledMain";
import StyledTitle from "../Title";

const ReferencesContainer = styled.div`
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

const ReferencesList = styled.div`
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;
    font-size: calc(2.5px + 2.5vw);

    @media screen and (max-width: 1000px) {
        align-self: center;
        width: 90%;
        margin: 1vh 1vw;
        font-size: calc(2.5px + 2.5vw);
}
`;

export default function References() {
    return (
        <StyledMain>
            <StyledTitle>References</StyledTitle>
            <ReferencesContainer>
                <ReferencesList>
                <p>Professional</p>
                    <ul>
                        <li>Dina Famin</li>
                            <ul>
                                <li>Position: Supervisor</li>
                                <li>Contact: dfamin@bu.edu</li>
                            </ul>
                        <li>Vanessa Wish</li>
                            <ul>
                                <li>Position: Supervisor</li>
                                <li>Contact: vwish@bu.edu</li>
                            </ul>
                    </ul>
                </ReferencesList>
            </ReferencesContainer>
        </StyledMain>
    )
}