// importing react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// importing context
import { WikiContext } from "../../context/WikiContext";

// importing styling stuff
import styled from "styled-components";

const Wiki = () => {
	const [itemList, setItemList] = useState(null);
	const { fetchList, setFetchList } = useContext(WikiContext);

	useEffect(() => {
		fetch(`/${fetchList}`)
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setItemList(data.data);
				console.log(itemList);
			})
			.catch((err) => console.error(err));
	}, [fetchList]);

	console.log(fetchList);

	return (
		<>
			<div>Welcome to the Critterpedia page!</div>
			<button onClick={() => setFetchList("bugs")}>Bugs</button>
			<button onClick={() => setFetchList("fish")}>Fish</button>
			<button onClick={() => setFetchList("sea")}>Sea Critters</button>

			<ItemList>
				{itemList?.map((item) => {
					return (
						<Wrapper key={item._id}>
							<Link
								to={`/wiki/${fetchList}/${item["file-name"]}`}
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
