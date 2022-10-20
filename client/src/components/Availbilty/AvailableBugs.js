import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

import {
	CritterWrapper,
	Wrapper,
	Image,
	ImageWrapper,
	Title,
	CenterWrapper,
	CaughtWrapper,
} from "./styled-components";

const AvailableBugs = () => {
	const { state } = useContext(UserContext);
	const [availableBugs, setAvailableBugs] = useState(null);

	useEffect(() => {
		fetch("bugs/available")
			.then((res) => res.json())
			.then((data) => setAvailableBugs(data.data));
	}, []);

	return (
		availableBugs && (
			<>
				<Wrapper>
					<Title>Bugs Available to Catch</Title>
					<CenterWrapper>
						<CritterWrapper>
							{availableBugs.map((bug) => {
								return (
									<Link
										to={`/critterpedia/bugs/${bug.filename}`}
										key={bug.filename}
									>
										{state?.bugs.includes(bug.filename) ? (
											<CaughtWrapper>
												<Image
													src={bug.iconSrc}
													alt={bug.name}
												/>
											</CaughtWrapper>
										) : (
											<ImageWrapper>
												<Image
													src={bug.iconSrc}
													alt={bug.name}
												/>
											</ImageWrapper>
										)}
									</Link>
								);
							})}
						</CritterWrapper>
					</CenterWrapper>
				</Wrapper>
			</>
		)
	);
};

export default AvailableBugs;
