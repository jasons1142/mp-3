import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: #cbd5e1;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        width:100%;
        height: 100vh;
        background-color: #cbd5e1;
    }
`;

export default StyledMain;
