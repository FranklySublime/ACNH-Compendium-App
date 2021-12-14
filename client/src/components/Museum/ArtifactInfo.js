// importing react
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

// importing context
import { UserContext } from "../../context/UserContext";

// importing styling
import { Wrapper } from "./styled-components";

const ArtifactInfo = () => {
	const { category, id } = useParams();
	const [detailedArtifact, setDetailedArtifact] = useState(null);
	const {
		state,
		actions: { addToCollection, removeFromCollection },
	} = useContext(UserContext);

	useEffect(() => {
		fetch(`/${category}/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setDetailedArtifact(data.data);
			})
			.catch((err) => console.error(err));
	}, []);
	console.log(state);

	return (
		detailedArtifact && (
			<Wrapper>
				<div>{detailedArtifact.name["name-USen"]}</div>
				<img
					src={detailedArtifact.image_uri}
					alt={detailedArtifact.name["name-USen"]}
				/>
				<h1>Artifact Info</h1>
				{category === "art" ? (
					<div>Has Fake: {detailedArtifact.hasFake.toString()}</div>
				) : (
					<div>Part of: {detailedArtifact["part-of"]}</div>
				)}
				<div>
					Price:{" "}
					{category === "art"
						? detailedArtifact["sell-price"]
						: detailedArtifact.price}{" "}
					bells
				</div>
				<h2>Museum description</h2>
				<div>
					{category === "art"
						? detailedArtifact["museum-desc"]
						: detailedArtifact["museum-phrase"]}
				</div>
				{state[category]?.includes(id) ? (
					<button onClick={() => removeFromCollection(category, id)}>
						Remove from Collection
					</button>
				) : (
					<button onClick={() => addToCollection(category, id)}>
						Add to Collection
					</button>
				)}
			</Wrapper>
		)
	);
};

export default ArtifactInfo;
