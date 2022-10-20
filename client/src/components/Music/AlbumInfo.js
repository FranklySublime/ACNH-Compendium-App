// importing react
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

// importing context
import { UserContext } from "../../context/UserContext";

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

const AlbumInfo = () => {
	const { id } = useParams();
	const category = "music";
	const [detailedAlbum, setDetailedAlbum] = useState(null);
	const {
		state,
		actions: { addToCollection, removeFromCollection },
	} = useContext(UserContext);

	useEffect(() => {
		fetch(`/music/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setDetailedAlbum(data.data);
			})
			.catch((err) => console.error(err));
	}, []);
	console.log(state);

	return (
		detailedAlbum && (
			<Wrapper>
				<DetailsImageWrappper>
					<Title>{detailedAlbum.name["name-USen"]}</Title>
					<ImageWrapper>
						<Image
							src={detailedAlbum.image_uri}
							alt={detailedAlbum.name["name-USen"]}
						/>
					</ImageWrapper>
				</DetailsImageWrappper>
				<InfoWrapper>
					<Title>Album Info</Title>
					<div>
						{detailedAlbum.isOrderable
							? "Is orderable through Nook Shopping"
							: "Only availble by catching K.K.'s set"}
					</div>
					<div>
						<Bold>Price:</Bold>
						{detailedAlbum["sell-price"]} bells
					</div>
					<audio controls>
						<source src={detailedAlbum.music_uri} />
					</audio>

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

export default AlbumInfo;
