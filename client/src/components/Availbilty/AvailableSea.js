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

const AvailableSea = () => {
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
										<ImageWrapper>
											<Image
												src={sea.iconSrc}
												alt={sea.name}
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

export default AvailableSea;
