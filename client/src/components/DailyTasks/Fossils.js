// importing react
import React, { useContext } from "react";

// importing styling stuff
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import { Box, ImageWrapper, Image, Title } from "./styled-components";

const Fossils = () => {
	const {
		state,
		actions: { toggleFossil, toggleMoneyTree, toggleBottle },
	} = useContext(UserContext);
	return (
		<div>
			<Title>Fossils, Money Tree, and DIY Recipe Bottle</Title>
			<Box>
				{state?.fossils.map((item, index) => {
					return (
						<ImageWrapper
							onClick={() => toggleFossil(index)}
							itemToggle={item}
							key={Math.random() * 14000000000}
						>
							<Image
								src="https://acnhcdn.com/latest/MenuIcon/Fossil.png"
								alt="fossil"
							/>
						</ImageWrapper>
					);
				})}
				<ImageWrapper
					onClick={() => toggleMoneyTree()}
					itemToggle={state.moneyTree}
				>
					<Image
						src="https://acnhcdn.com/latest/MenuIcon/PltMoney.png"
						alt="fossil"
					/>
				</ImageWrapper>
				<ImageWrapper
					onClick={() => toggleBottle()}
					itemToggle={state.bottle}
				>
					<Image
						src="https://acnhcdn.com/latest/MenuIcon/BottleRecipe.png"
						alt="fossil"
					/>
				</ImageWrapper>
			</Box>
		</div>
	);
};

export default Fossils;
