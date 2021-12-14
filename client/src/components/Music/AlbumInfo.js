// importing react
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

// importing context
import { UserContext } from "../../context/UserContext";

// importing styling
import { Wrapper } from "./styled-components";

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
				<div>{detailedAlbum.name["name-USen"]}</div>
				<img
					src={detailedAlbum.image_uri}
					alt={detailedAlbum.name["name-USen"]}
				/>
				<h1>Album Info</h1>
				<div>
					Is Orderable Through: {detailedAlbum.isOrderable.toString()}
				</div>
				<div>Price: {detailedAlbum["sell-price"]} bells</div>
				<audio controls>
					<source src={detailedAlbum.music_uri} />
				</audio>

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

export default AlbumInfo;
