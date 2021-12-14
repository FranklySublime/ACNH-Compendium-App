// importing React
import React from "react";
import { useNavigate } from "react-router-dom";

// importing components
import DailyTasks from "../DailyTasks";
import AvailableBugs from "../Availbilty/AvailableBugs";
import AvailableFish from "../Availbilty/AvailableFish";
import AvailableSea from "../Availbilty/AvailableSea";

// importing styling
import styled from "styled-components";
import Critterpedia from "../Critterpedia";

const Homepage = () => {
	let navigate = useNavigate();
	const handleClick = (e) => {
		navigate(`/${e}`);
	};
	return (
		<Wrapper>
			<div>This is the homepage!</div>
			<button onClick={() => handleClick("critterpedia")}>
				Critterpdia
			</button>
			<button onClick={() => handleClick("museum")}>Museum</button>
			<button onClick={() => handleClick("music")}>Music</button>
			<DailyTasks />
			<AvailableBugs />
			<AvailableFish />
			<AvailableSea />
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default Homepage;
