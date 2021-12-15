import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
	CritterWrapper,
	Wrapper,
	Image,
	ImageWrapper,
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
				<div>Fish Available to Catch</div>
				<Wrapper>
					{availableFish.map((fish) => {
						return (
							<Link
								to={`/critterpedia/fish/${fish.filename}`}
								key={fish.filename}
							>
								<ImageWrapper>
									<Image src={fish.iconSrc} alt={fish.name} />
								</ImageWrapper>
							</Link>
						);
					})}
				</Wrapper>
			</>
		)
	);
};
export default AvailableFish;
