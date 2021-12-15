// importing react
import React from "react";

// importing styling stuff
import styled from "styled-components";
import { Box, ImageWrapper, Image, Title } from "./styled-components";

const Fossils = () => {
	return (
		<div>
			<Title>Fossils, Money Tree, and DIY Recipe Bottle</Title>
			<Box>
				<ImageWrapper>
					<Image
						src="https://acnhcdn.com/latest/MenuIcon/Fossil.png"
						alt="fossil"
					/>
				</ImageWrapper>
				<ImageWrapper>
					<Image
						src="https://acnhcdn.com/latest/MenuIcon/Fossil.png"
						alt="fossil"
					/>
				</ImageWrapper>
				<ImageWrapper>
					<Image
						src="https://acnhcdn.com/latest/MenuIcon/Fossil.png"
						alt="fossil"
					/>
				</ImageWrapper>
				<ImageWrapper>
					<Image
						src="https://acnhcdn.com/latest/MenuIcon/Fossil.png"
						alt="fossil"
					/>
				</ImageWrapper>
				<ImageWrapper>
					<Image
						src="https://acnhcdn.com/latest/MenuIcon/PltMoney.png"
						alt="fossil"
					/>
				</ImageWrapper>
				<ImageWrapper>
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
