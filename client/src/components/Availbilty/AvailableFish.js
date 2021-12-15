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

const AvailableFish = () => {
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
										<ImageWrapper>
											<Image
												src={fish.iconSrc}
												alt={fish.name}
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
export default AvailableFish;
