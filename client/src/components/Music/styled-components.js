import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--accent-color);
	border: 5px solid var(--primary-color);
	border-radius: 8px;
	margin: 5px;
`;

export const WikiWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--accent-color);
	border: 5px solid var(--primary-color);
	border-radius: 8px;
	margin: 5px;
`;

export const ItemList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
`;

export const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 160px;
	margin: 0px 15px;
`;

export const AlbumWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--background-fade);
	border: none;
	border-radius: 50%;
	margin: 15px 0px;
	height: 140px;
	width: 140px;
`;

export const AlbumImage = styled.img`
	height: 100px;
`;
export const CaughtWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--background-fade);
	border: 5px solid var(--primary-color);
	border-radius: 50%;
	margin: 10px 0px 15px 0px;
	height: 140px;
	width: 140px;
`;

export const Title = styled.h1`
	color: var(--secondary-color);
	text-align: center;
`;

export const SyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;
