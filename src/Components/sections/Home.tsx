import styled from "styled-components";
import StyledMain from "../StyledMain";
import StyledTitle from "../Title";

const HomeContainer = styled.div`
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

const HomeImageDiv = styled.div`
    width: 40%;
    margin: 1vh 1vw;

    @media screen and (max-width: 1000px) {
        margin: 1vh auto;
    }
`;

const HomeImage = styled.img`
    max-width: 100%;
`;

const HomeTextContainer = styled.div`
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;

    @media screen and (max-width: 1000px) {
        align-self: center;
        width: 90%;
        margin: 1vh 1vw;
    }
`;

const HomeText = styled.p`
    margin: 0 1vw;
    font-size: calc(2px + 2vw);

    @media screen and (max-width: 1000px) {
        margin: 2% 2%;
        font-size: calc(2px + 2vw);
    }
`;

export default function Home() {
    return (
        <StyledMain>
            <StyledTitle>Home</StyledTitle>
            <HomeContainer>
                <HomeImageDiv>
                    <HomeImage id = "profile-image" src = "profile.jpg" alt = "Jason Senecharles"/>
                </HomeImageDiv>
                <HomeTextContainer>
                    <HomeText>
                        My name is Jason Senecharles I am a Computer Science student at Boston University.
                        This summer I am looking to enhance my educational prowess by landing a summer internship.
                        I hope to work at a tech company with a welcoming environment which will help me to further
                        my software engineering abilities.
                    </HomeText>
                </HomeTextContainer>
            </HomeContainer>
        </StyledMain>
    )
}