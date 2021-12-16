// importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// importing context
import { UserContext } from "../../context/UserContext";

// importing styling stuff
import Logo from "../../assets/Animal_Crossing_Leaf.svg";
import { IconContext } from "react-icons";
import { FiUser } from "react-icons/fi";
import {
	Wrapper,
	LogoImg,
	SyledLink,
	UnstyledButton,
	SignInOut,
} from "./styled-components";
const Header = () => {
	const {
		state,
		actions: { signOut, triggerReload },
	} = useContext(UserContext);
	const handleSignout = () => {
		localStorage.removeItem("_id");
		signOut();
		triggerReload();
	};
	return (
		<Wrapper>
			<SyledLink to="/">
				<LogoImg src={Logo} alt="logo" />
			</SyledLink>
			<SignInOut>
				{state.username ? (
					<UnstyledButton onClick={() => handleSignout()}>
						Sign Out
					</UnstyledButton>
				) : (
					<UnstyledButton>
						<SyledLink to="/signin">Sign In</SyledLink>
					</UnstyledButton>
				)}
			</SignInOut>
		</Wrapper>
	);
};

export default Header;
