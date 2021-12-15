import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
	CritterWrapper,
	Wrapper,
	Image,
	ImageWrapper,
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
				<div>Bugs Available to Catch</div>
				<Wrapper>
					{availableBugs.map((bug) => {
						return (
							<CritterWrapper>
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
							</CritterWrapper>
						);
					})}
				</Wrapper>
			</>
		)
	);
};

export default AvailableBugs;
