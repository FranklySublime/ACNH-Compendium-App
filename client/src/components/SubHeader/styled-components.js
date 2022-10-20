import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	background: var(--accent-color);
`;

export const UnstyledButton = styled.button`
	border: none;
	background: inherit;
`;

export const ButtonImage = styled.img`
	height: 90px;
`;

export const ButtonBackground = styled.div`
	background: var(--background-fade);
	border-radius: 50%;
	cursor: pointer;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
	color: var(--secondary-color);
`;
