import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import { WikiContext } from "../../context/WikiContext";

import { capitalizeNames } from "../../helpers";

import {
	WikiWrapper,
	ItemList,
	UnstyledButton,
	ButtonWrapper,
	ButtonImage,
	ButtonBackground,
	ItemWrapper,
	ArtifactWrapper,
	CaughtWrapper,
	Title,
	SyledLink,
} from "./styled-components";
import Painting from "../../assets/Famous_Painting_NH_Icon.png";

const Museum = () => {
	const { state } = useContext(UserContext);
	const { artifactList, setArtifactList, museumList } =
		useContext(WikiContext);

	console.log(artifactList);

	return (
		<WikiWrapper>
			<ButtonWrapper>
				<UnstyledButton onClick={() => setArtifactList("fossil")}>
					<ButtonBackground>
						<ButtonImage
							src={
								"https://acnhcdn.com/latest/MenuIcon/Fossil.png"
							}
						/>
					</ButtonBackground>
				</UnstyledButton>
				<UnstyledButton onClick={() => setArtifactList("art")}>
					<ButtonBackground>
						<ButtonImage src={Painting} />
					</ButtonBackground>
				</UnstyledButton>
			</ButtonWrapper>
			<ItemList>
				{museumList?.map((item) => {
					return state[artifactList]?.includes(item["file-name"]) ? (
						<SyledLink
							to={`/museum/${artifactList}/${item["file-name"]}`}
							key={item._id}
						>
							<ItemWrapper>
								<Title>
									{capitalizeNames(item.name["name-USen"])}
								</Title>

								<CaughtWrapper key={item._id}>
									<img
										src={item.image_uri}
										alt={item["file-name"]}
									/>
								</CaughtWrapper>
							</ItemWrapper>
						</SyledLink>
					) : (
						<SyledLink
							to={`/museum/${artifactList}/${item["file-name"]}`}
							key={item._id}
						>
							<ItemWrapper>
								<Title>
									{capitalizeNames(item.name["name-USen"])}
								</Title>

								<ArtifactWrapper>
									<img
										src={item.image_uri}
										alt={item["file-name"]}
									/>
								</ArtifactWrapper>
							</ItemWrapper>
						</SyledLink>
					);
				})}
			</ItemList>
		</WikiWrapper>
	);
};

export default Museum;
