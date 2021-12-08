// importing react
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

// importing context
import { WikiContext } from "../../context/WikiContext";

// importing styling
import styled from "styled-components";

const CritterInfo = () => {
	const { fetchList } = useContext(WikiContext);
	const { id } = useParams();
	const [detailedCritter, setDetailedCritter] = useState(null);

	console.log(fetchList);

	useEffect(() => {
		fetch(`/${fetchList}/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setDetailedCritter(data.data);
			})
			.catch((err) => console.error(err));
	}, []);
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
					{detailedCritter.availability["month-northern"]}
				</div>
				<div>
					Southern Hemisphere:{" "}
					{detailedCritter.availability["month-southern"]}
				</div>
			</Wrapper>
		)
	);
};

const Wrapper = styled.div``;

export default CritterInfo;
