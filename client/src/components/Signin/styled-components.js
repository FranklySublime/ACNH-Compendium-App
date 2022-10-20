import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 150px 0px;
`;
export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 5px solid var(--primary-color);
	border-radius: 8px;
	padding: 10px;
`;

export const Input = styled.input`
	margin: 3px;
	width: 200px;
	overflow: hidden;
`;
