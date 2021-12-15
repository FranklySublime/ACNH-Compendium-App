// importing styling stuff
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 720px;
	border: 5px solid var(--secondary-color);
	border-radius: 20px;
	padding: 15px;
	margin: 10px;
	background: var(--background-fade);
`;

export const Title = styled.h1`
	color: var(--just-white);
`;

export const Box = styled.div`
	display: flex;
	justify-content: center;
	width: 420px;
`;

export const ImageWrapper = styled.div`
	background-color: var(--accent-color);
	border-radius: 50%;
	width: 70px;
	margin: 5px;
`;

export const Image = styled.img`
	height: 70px;
`;
