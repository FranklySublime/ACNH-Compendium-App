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

const AvailableFish = () => {
	const { state } = useContext(UserContext);
	const [availableFish, setAvailableFish] = useState(null);

	useEffect(() => {
		fetch("fish/available")
			.then((res) => res.json())
			.then((data) => setAvailableFish(data.data));
	}, []);

	return (
		availableFish && (
			<>
				<Wrapper>
					<Title>Fish Available to Catch</Title>
					<CenterWrapper>
						<CritterWrapper>
							{availableFish.map((fish) => {
								return (
									<Link
										to={`/critterpedia/fish/${fish.filename}`}
										key={fish.filename}
									>
										{state?.fish.includes(fish.filename) ? (
											<CaughtWrapper>
												<Image
													src={fish.iconSrc}
													alt={fish.name}
												/>
											</CaughtWrapper>
										) : (
											<ImageWrapper>
												<Image
													src={fish.iconSrc}
													alt={fish.name}
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
export default AvailableFish;
