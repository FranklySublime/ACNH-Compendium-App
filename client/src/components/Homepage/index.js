// importing React
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// importing context
import { UserContext } from "../../context/UserContext";

// importing components
import DailyTasks from "../DailyTasks";
import AvailableBugs from "../Availbilty/AvailableBugs";
import AvailableFish from "../Availbilty/AvailableFish";
import AvailableSea from "../Availbilty/AvailableSea";
import CollectionTracker from "../CollectionTracker";

// importing styling
import styled from "styled-components";

const Homepage = () => {
	const { state } = useContext(UserContext);

	return (
		<Wrapper>
			<DailyTasks />
			{state.username && <CollectionTracker />}
			<AvailableBugs />
			<AvailableFish />
			<AvailableSea />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default Homepage;
