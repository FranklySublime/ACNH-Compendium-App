// importing react
import React from "react";
import { Link } from "react-router-dom";

// importing styling stuff
import styled from "styled-components";
import Logo from "../../assets/Animal_Crossing_Leaf.svg";
import { IconContext } from "react-icons";
import { FiUser } from "react-icons/fi";

const Header = () => {
	return (
		<Wrapper>
			<Link to="/">
				<LogoImg src={Logo} alt="logo" />
			</Link>
			<IconContext.Provider value={{ size: "40px" }}>
				<Link to="/signin">
					<FiUser value={{ size: "40px" }} />
				</Link>
			</IconContext.Provider>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 35px;
	background-color: var(--primary-color);
`;

const LogoImg = styled.img`
	height: 50px;
	color: var(--just-white);
`;

export default Header;
