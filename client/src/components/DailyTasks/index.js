// importing react
import React from "react";

// importing components
import Fossils from "./Fossils";
import Rocks from "./Rocks";

// importing styling stuff
import styled from "styled-components";

const DailyTasks = () => {
	return (
		<>
			<div>Daily Tasks</div>
			<Fossils />
			<Rocks />
		</>
	);
};

export default DailyTasks;
