// importing react
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

// importing context
import { WikiContext } from "../../context/WikiContext";
import { UserContext } from "../../context/UserContext";

// importing styling
import styled from "styled-components";

const CritterInfo = () => {
	// const { fetchList } = useContext(WikiContext);
	const { category, id } = useParams();
	const [detailedCritter, setDetailedCritter] = useState(null);
	const {
		state,
		actions: { addToCollection, removeFromCollection },
	} = useContext(UserContext);

	// console.log(fetchList);

	useEffect(() => {
		fetch(`/${category}/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setDetailedCritter(data.data);
			})
			.catch((err) => console.error(err));
	}, []);
	console.log(state);
	return (
		detailedCritter && (
			<Wrapper>
				<div>{detailedCritter.name["name-USen"]}</div>
				<img
					src={detailedCritter.image_uri}
					alt={detailedCritter.name["name-USen"]}
				/>
				<h1>Critter Info</h1>
				<div>Location: {detailedCritter.availability.location}</div>
				<div>Price: {detailedCritter.price} bells</div>
				<h2>Availability</h2>
				<div>
					Nothern Hemisphere:{" "}
					{detailedCritter.availability.isAllYear
						? "All Months"
						: detailedCritter.availability["month-northern"]}
				</div>
				<div>
					Southern Hemisphere:{" "}
					{detailedCritter.availability.isAllYear
						? "All Months"
						: detailedCritter.availability["month-southern"]}
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

const Wrapper = styled.div``;

export default CritterInfo;
