import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Critterpedia from "../../assets/Menu_Critterpedia_NH_Icon.png";
import Blathers from "../../assets/Blathers_Icon.png";
import Albums from "../../assets/NH-K.K._Slider-Icon.png";

import {
	Wrapper,
	UnstyledButton,
	ButtonImage,
	ButtonBackground,
	ButtonWrapper,
	Title,
} from "./styled-components";

const SubHeader = () => {
	let navigate = useNavigate();
	const handleClick = (e) => {
		navigate(`/${e}`);
	};

	return (
		<Wrapper>
			<ButtonWrapper>
				<Title>Critterpedia</Title>
				<UnstyledButton onClick={() => handleClick("critterpedia")}>
					<ButtonBackground>
						<ButtonImage src={Critterpedia} />
					</ButtonBackground>
				</UnstyledButton>
			</ButtonWrapper>
			<ButtonWrapper>
				<Title>Museum</Title>
				<UnstyledButton onClick={() => handleClick("museum")}>
					<ButtonBackground>
						<ButtonImage src={Blathers} />
					</ButtonBackground>
				</UnstyledButton>
			</ButtonWrapper>
			<ButtonWrapper>
				<Title>Music</Title>
				<UnstyledButton onClick={() => handleClick("music")}>
					<ButtonBackground>
						<ButtonImage src={Albums} />
					</ButtonBackground>
				</UnstyledButton>
			</ButtonWrapper>
		</Wrapper>
	);
};

export default SubHeader;
