import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 70%;
    background-color: #cbd5e1;

    @media screen and (max-width: 1000px) {
        width:100%;
        background-color: #cbd5e1;
    }
`;

export default StyledMain;
