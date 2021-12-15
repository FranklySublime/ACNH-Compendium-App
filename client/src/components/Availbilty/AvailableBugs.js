import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
	CritterWrapper,
	Wrapper,
	Image,
	ImageWrapper,
	Title,
	CenterWrapper,
} from "./styled-components";

const AvailableBugs = () => {
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
										<ImageWrapper>
											<Image
												src={bug.iconSrc}
												alt={bug.name}
											/>
										</ImageWrapper>
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
