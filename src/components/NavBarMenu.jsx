import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledLink = styled(Link)`
    margin: 5px;
    font-size: 22px;
    text-decoration: none;
    ${({ clicked }) => 
    clicked && `
        border-radius: 10px;
        background-color: #5843e4;
    `
    }
`;

export default function NavBarMenu({ title, link, isActive }) {
    const [clicked, setClicked] = useState(isActive);
    return (
        <StyledLink to={link} onClick={() => setClicked(true)} clicked={clicked}>
            {title}
        </StyledLink>
    );
}