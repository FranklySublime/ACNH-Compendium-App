import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	width: 720px;
`;

export const CritterWrapper = styled.div`
	/* border: 2px solid var(--accent-color);
	width: 120px;
	height: 120px;
	border-radius: 50%; */
`;

export const ImageWrapper = styled.div`
	background-color: var(--faded-color);
	border-radius: 50%;
	height: 120px;
	width: 120px;
	margin: 5px;
`;

export const Image = styled.img`
	height: 120px;
	width: 120px;
`;
