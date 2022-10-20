// importing react
import React, { useContext } from "react";

import { UserContext } from "../../context/UserContext";

// importing styling stuff

import { Box, ImageWrapper, Image, Title } from "./styled-components";

const Rocks = () => {
	const {
		state,
		actions: { toggleRock },
	} = useContext(UserContext);

	return (
		<div>
			<Title>Hitting Rocks</Title>
			<Box>
				{state.rocks.map((item, index) => {
					return (
						<ImageWrapper
							onClick={() => toggleRock(index)}
							itemToggle={item}
							key={Math.random() * 14000000000}
						>
							<Image
								src="https://acnhcdn.com/latest/MenuIcon/OreStone.png"
								alt="fossil"
							/>
						</ImageWrapper>
					);
				})}
			</Box>
		</div>
	);
};

export default Rocks;
