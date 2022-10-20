// importing react
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

// importing context
import { UserContext } from "../../context/UserContext";

//importing helpers
import { capitalizeNames } from "../../helpers";

// importing styling
import {
	Wrapper,
	Title,
	Image,
	DetailsImageWrappper,
	ImageWrapper,
	InfoWrapper,
	Bold,
} from "./styled-components";

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
				<DetailsImageWrappper>
					<Title>
						{capitalizeNames(detailedArtifact.name["name-USen"])}
					</Title>
					<ImageWrapper>
						<Image
							src={detailedArtifact.image_uri}
							alt={detailedArtifact.name["name-USen"]}
						/>
					</ImageWrapper>
				</DetailsImageWrappper>
				<InfoWrapper>
					<Title>Artifact Info</Title>
					{category === "art" ? (
						<div>
							<Bold>Has Fake:</Bold>
							{detailedArtifact.hasFake.toString()}
						</div>
					) : (
						<div>
							<Bold>Part of:</Bold>
							{detailedArtifact["part-of"]}
						</div>
					)}
					<div>
						<Bold>Price:</Bold>
						{category === "art"
							? detailedArtifact["sell-price"]
							: detailedArtifact.price}{" "}
						bells
					</div>
					<Title>Museum description</Title>
					<div>
						{category === "art"
							? detailedArtifact["museum-desc"]
							: detailedArtifact["museum-phrase"]}
					</div>
					{state[category]?.includes(id) ? (
						<button
							onClick={() => removeFromCollection(category, id)}
						>
							Remove from Collection
						</button>
					) : (
						<button onClick={() => addToCollection(category, id)}>
							Add to Collection
						</button>
					)}
				</InfoWrapper>
			</Wrapper>
		)
	);
};

export default ArtifactInfo;
