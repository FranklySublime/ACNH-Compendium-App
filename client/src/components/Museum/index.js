import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { WikiContext } from "../../context/WikiContext";

import {
	ItemList,
	Wrapper,
	UnstyledButton,
	ButtonImage,
	ButtonBackground,
} from "./styled-components";
import Painting from "../../assets/Famous_Painting_NH_Icon.png";
const Museum = () => {
	const { artifactList, setArtifactList, museumList } =
		useContext(WikiContext);

	console.log(artifactList);

	return (
		<div>
			<UnstyledButton onClick={() => setArtifactList("fossil")}>
				<ButtonBackground>
					<ButtonImage
						src={"https://acnhcdn.com/latest/MenuIcon/Fossil.png"}
					/>
				</ButtonBackground>
			</UnstyledButton>
			<UnstyledButton onClick={() => setArtifactList("art")}>
				<ButtonBackground>
					<ButtonImage src={Painting} />
				</ButtonBackground>
			</UnstyledButton>

			<ItemList>
				{museumList?.map((item) => {
					return (
						<Wrapper key={item._id}>
							<Link
								to={`/museum/${artifactList}/${item["file-name"]}`}
							>
								<div>{item.name["name-USen"]}</div>
								<img
									src={item.image_uri}
									alt={item["file-name"]}
								/>
							</Link>
						</Wrapper>
					);
				})}
			</ItemList>
		</div>
	);
};

export default Museum;
