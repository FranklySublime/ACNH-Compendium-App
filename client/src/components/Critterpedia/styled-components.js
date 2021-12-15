import styled from "styled-components";

export const ItemList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	/* display: grid;
grid-template-columns: 50px 50px 50px 50px; */
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 2px solid var(--primary-color);
	margin: 5px;
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
