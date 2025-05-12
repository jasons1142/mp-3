import { Link } from "react-router-dom"
import { styled } from "styled-components";

const StyledFooter = styled.footer`
    background-color: #1e293b;
    color: white;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const FooterLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:visited {
        color: white;
    }

    &:hover {
        color: #38bdf8
    }

    &:active {
        color: #38bdf8
}
`;

export default function Footer() {
    return (
    <StyledFooter>
        <p>All Rights Reserved by Jason Senecharles <FooterLink to = "/credits">Credits</FooterLink> &#169;</p>
    </StyledFooter>
    );
}