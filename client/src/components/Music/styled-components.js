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
