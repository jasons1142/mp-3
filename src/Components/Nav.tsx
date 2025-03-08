import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    margin: 0;

    @media screen and (max-width: 750px) {
        width: 100%;
        margin: 0;
    }
`;

const StyledNavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: orange;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: orange;
        list-style: none;
        padding-left: 0;
    }
`;

const StyledListItem = styled.li`
    font-size: calc(3px + 3vw);
    width: 90%;
    background-color:orange;
    padding: 2vh 0;
    margin: 5vh auto;
    border-radius: 5px;

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 1.5vw);
        background-color:orange;
        padding: 1% .5%;
        margin: 1% .5%;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledNavList>
                <StyledListItem><NavLink to = "/">Home</NavLink></StyledListItem>
                <StyledListItem><NavLink to = "/education">Education</NavLink></StyledListItem>
                <StyledListItem><NavLink to = "/experiences">Experiences</NavLink></StyledListItem>
                <StyledListItem><NavLink to = "/activities">Activities</NavLink></StyledListItem>
                <StyledListItem><NavLink to = "/projects">Projects</NavLink></StyledListItem>
                <StyledListItem><NavLink to = "/references">References</NavLink></StyledListItem>
            </StyledNavList>
        </StyledNav>
    );
};