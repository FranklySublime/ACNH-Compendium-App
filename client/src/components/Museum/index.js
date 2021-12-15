import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { WikiContext } from "../../context/WikiContext";

import { ItemList, Wrapper } from "./styled-components";

const Museum = () => {
	const { artifactList, setArtifactList, museumList } =
		useContext(WikiContext);

	console.log(artifactList);

	return (
		<div>
			<div> sup Blathers</div>
			<button onClick={() => setArtifactList("fossil")}>Fossils</button>
			<button onClick={() => setArtifactList("art")}>Art</button>

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
