// importing react
import React from "react";

// importing components
import Fossils from "./Fossils";
import Rocks from "./Rocks";

// importing styling stuff
import { Wrapper, Title } from "./styled-components";

const DailyTasks = () => {
	return (
		<Wrapper>
			<Title>Daily Tasks</Title>
			<Fossils />
			<Rocks />
		</Wrapper>
	);
};

export default DailyTasks;
