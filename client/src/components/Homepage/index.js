// importing React
import React from "react";
import { useNavigate } from "react-router-dom";

// importing components
import DailyTasks from "../DailyTasks";

// importing styling
import styled from "styled-components";

const Homepage = () => {
	let navigate = useNavigate();
	const handleClick = () => {
		navigate("/wiki");
	};
	return (
		<Wrapper>
			<div>This is the homepage!</div>
			<button onClick={handleClick}>Critterpdia</button>
			<DailyTasks />
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default Homepage;
