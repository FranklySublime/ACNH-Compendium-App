import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 5px solid var(--secondary-color);
	border-radius: 20px;
	padding: 15px;
	background: var(--background-fade);
	min-width: 720px;
`;

export const Title = styled.h1`
	color: var(--just-white);
`;

export const ProgressBar = styled.div`
	height: 100%;
	background-color: var(--primary-color);
	border: 3px solid var(--primary-color);
`;

export const ProgressWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	background-color: var(--accent-color);
	margin: 5px;
	width: 300px;
	height: 24px;
`;

export const Image = styled.img`
	height: 30px;
`;
export const Tracker = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
