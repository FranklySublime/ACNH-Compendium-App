// importing react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// importing context
import { WikiContext } from "../../context/WikiContext";
// importing helper
import { capitalizeNames } from "../../helpers";

// importing styling stuff
import {
	WikiWrapper,
	ItemList,
	UnstyledButton,
	ButtonWrapper,
	ButtonImage,
	ButtonBackground,
	ItemWrapper,
	CritterWrapper,
	CaughtWrapper,
	Title,
	SyledLink,
} from "./styled-components";

// importing icons
import Bug from "../../assets/Bug_NH_Icon.png";
import Fish from "../../assets/Fish_NH_Icon.png";
import Sea from "../../assets/Sea_Creature_NH_Icon.png";
import { UserContext } from "../../context/UserContext";

const Critterpedia = () => {
	const { state } = useContext(UserContext);
	const { critterList, setCritterList, itemList } = useContext(WikiContext);

	console.log(critterList);

	return (
		<WikiWrapper>
			<ButtonWrapper>
				<UnstyledButton onClick={() => setCritterList("bugs")}>
					<ButtonBackground>
						<ButtonImage src={Bug} />
					</ButtonBackground>
				</UnstyledButton>
				<UnstyledButton onClick={() => setCritterList("fish")}>
					<ButtonBackground>
						<ButtonImage src={Fish} />
					</ButtonBackground>
				</UnstyledButton>
				<UnstyledButton onClick={() => setCritterList("sea")}>
					<ButtonBackground>
						<ButtonImage src={Sea} />
					</ButtonBackground>
				</UnstyledButton>
			</ButtonWrapper>
			<ItemList>
				{itemList?.map((item) => {
					return state[critterList]?.includes(item["file-name"]) ? (
						<SyledLink
							to={`/critterpedia/${critterList}/${item["file-name"]}`}
							key={item._id}
						>
							<ItemWrapper>
								<Title>
									{capitalizeNames(item.name["name-USen"])}
								</Title>

								<CaughtWrapper>
									<img
										src={item.icon_uri}
										alt={item["file-name"]}
									/>
								</CaughtWrapper>
							</ItemWrapper>
						</SyledLink>
					) : (
						<SyledLink
							to={`/critterpedia/${critterList}/${item["file-name"]}`}
							key={item._id}
						>
							<ItemWrapper>
								<Title>
									{capitalizeNames(item.name["name-USen"])}
								</Title>

								<CritterWrapper>
									<img
										src={item.icon_uri}
										alt={item["file-name"]}
									/>
								</CritterWrapper>
							</ItemWrapper>
						</SyledLink>
					);
				})}
			</ItemList>
		</WikiWrapper>
	);
};

export default Critterpedia;
