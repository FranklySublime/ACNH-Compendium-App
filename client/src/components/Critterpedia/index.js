// importing react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// importing context
import { WikiContext } from "../../context/WikiContext";

// importing styling stuff
import { ItemList, Wrapper } from "./styled-components";

const Critterpedia = () => {
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
								to={`/critterpedia/${fetchList}/${item["file-name"]}`}
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

export default Critterpedia;
