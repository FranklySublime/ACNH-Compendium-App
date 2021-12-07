// importing react
import React, { useEffect, useState } from "react";

// importing styling stuff
import styled from "styled-components";

const Wiki = () => {
	const [itemList, setItemList] = useState(null);

	useEffect(() => {
		fetch(`/bugs`)
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setItemList(data.data);
				console.log(itemList);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<div>Welcome to the Critterpedia page!</div>
			<button>Bugs</button>
			<button>Fish</button>
			<button>Sea Critters</button>
			<ItemList>
				{itemList?.map((item) => {
					return (
						<Wrapper key={item._id}>
							<div>{item.name["name-USen"]}</div>
							<img src={item.icon_uri} alt={item["file-name"]} />
						</Wrapper>
					);
				})}
			</ItemList>
		</>
	);
};

const ItemList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	/* display: grid;
	grid-template-columns: 50px 50px 50px 50px; */
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 2px solid var(--primary-color);
	margin: 5px;
`;

export default Wiki;
