// importing react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// importing context
import { WikiContext } from "../../context/WikiContext";

// importing styling stuff
import {
	ItemList,
	Wrapper,
	UnstyledButton,
	ButtonImage,
	ButtonBackground,
} from "./styled-components";
import Bug from "../../assets/Bug_NH_Icon.png";
import Fish from "../../assets/Fish_NH_Icon.png";
import Sea from "../../assets/Sea_Creature_NH_Icon.png";

const Critterpedia = () => {
	const { critterList, setCritterList, itemList } = useContext(WikiContext);

	console.log(critterList);

	return (
		<>
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

			<ItemList>
				{itemList?.map((item) => {
					return (
						<Wrapper key={item._id}>
							<Link
								to={`/critterpedia/${critterList}/${item["file-name"]}`}
							>
								<div>{item.name["name-USen"]}</div>
								<img
									src={item.icon_uri}
									alt={item["file-name"]}
								/>
							</Link>
						</Wrapper>
					);
				})}
			</ItemList>
		</>
	);
};

export default Critterpedia;
