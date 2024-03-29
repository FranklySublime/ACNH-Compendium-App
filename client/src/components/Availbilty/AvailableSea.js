import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import {
	CritterWrapper,
	Wrapper,
	Image,
	ImageWrapper,
	Title,
	CenterWrapper,
	CaughtWrapper,
} from "./styled-components";

const AvailableSea = () => {
	const { state } = useContext(UserContext);
	const [availableSea, setAvailableSea] = useState(null);

	useEffect(() => {
		fetch("sea/available")
			.then((res) => res.json())
			.then((data) => setAvailableSea(data.data));
	}, []);

	return (
		availableSea && (
			<>
				<Wrapper>
					<Title>Sea Creatures Available to Catch</Title>
					<CenterWrapper>
						<CritterWrapper>
							{availableSea.map((sea) => {
								return (
									<Link
										to={`/critterpedia/sea/${sea.filename}`}
										key={sea.filename}
									>
										{state?.sea.includes(sea.filename) ? (
											<CaughtWrapper>
												<Image
													src={sea.iconSrc}
													alt={sea.name}
												/>
											</CaughtWrapper>
										) : (
											<ImageWrapper>
												<Image
													src={sea.iconSrc}
													alt={sea.name}
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

export default AvailableSea;
