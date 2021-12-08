// importing react
import React from "react";
import { Link } from "react-router-dom";

// importing styling stuff
import styled from "styled-components";
import Logo from "../../assets/Animal_Crossing_Leaf.svg";

const Header = () => {
	return (
		<Wrapper>
			<Link to="/">
				<LogoImg src={Logo} alt="logo" />
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--primary-color);
`;

const LogoImg = styled.img`
	height: 50px;
	color: var(--just-white);
`;

export default Header;
