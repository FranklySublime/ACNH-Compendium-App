import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 35px;
	background-color: var(--primary-color);
`;

export const LogoImg = styled.img`
	height: 50px;
`;

export const SyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

export const UnstyledButton = styled.button`
	border: none;
	background: inherit;
`;

export const SignInOut = styled.div`
	color: var(--just-white);
`;
