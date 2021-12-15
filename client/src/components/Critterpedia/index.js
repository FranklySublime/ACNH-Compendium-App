// importing react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// importing context
import { WikiContext } from "../../context/WikiContext";

// importing styling stuff
import { ItemList, Wrapper } from "./styled-components";

const Critterpedia = () => {
	const { critterList, setCritterList, itemList } = useContext(WikiContext);

	console.log(critterList);

	return (
		<>
			<div>Welcome to the Critterpedia page!</div>
			<button onClick={() => setCritterList("bugs")}>Bugs</button>
			<button onClick={() => setCritterList("fish")}>Fish</button>
			<button onClick={() => setCritterList("sea")}>Sea Critters</button>

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
