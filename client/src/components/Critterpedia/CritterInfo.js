// importing react
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

// importing context
import { UserContext } from "../../context/UserContext";

// importing helper
import { capitalizeNames, rangeToMonth } from "../../helpers";

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

const CritterInfo = () => {
	const { category, id } = useParams();
	const [detailedCritter, setDetailedCritter] = useState(null);
	const {
		state,
		actions: { addToCollection, removeFromCollection },
	} = useContext(UserContext);

	useEffect(() => {
		fetch(`/${category}/${id}`)
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
				<DetailsImageWrappper>
					<Title>
						{capitalizeNames(detailedCritter.name["name-USen"])}
					</Title>
					<ImageWrapper>
						<Image
							src={detailedCritter.image_uri}
							alt={detailedCritter.name["name-USen"]}
						/>
					</ImageWrapper>
				</DetailsImageWrappper>
				<InfoWrapper>
					<Title>Critter Info</Title>
					<div>
						<Bold>Location:</Bold>
						{detailedCritter.availability.location}
					</div>
					<div>
						<Bold>Price:</Bold>
						{detailedCritter.price} bells
					</div>
					<Title>Availability</Title>
					<div>
						<Bold>Nothern Hemisphere:</Bold>
						{detailedCritter.availability.isAllYear
							? "All Months"
							: rangeToMonth(
									detailedCritter.availability[
										"month-northern"
									]
							  )}
					</div>
					<div>
						<Bold>Southern Hemisphere:</Bold>
						{detailedCritter.availability.isAllYear
							? "All Months"
							: rangeToMonth(
									detailedCritter.availability[
										"month-southern"
									]
							  )}
					</div>
					<div>
						<Bold>Available Times:</Bold>
						{detailedCritter.time
							? detailedCritter.time
							: "Available at all times of the day"}
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

export default CritterInfo;
