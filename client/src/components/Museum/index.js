import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ItemList, Wrapper } from "./styled-components";

const Museum = () => {
	const [itemList, setItemList] = useState(null);
	const [fetchList, setFetchList] = useState("fossil");
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
		<div>
			<div> sup Blathers</div>
			<button onClick={() => setFetchList("fossil")}>Fossils</button>
			<button onClick={() => setFetchList("art")}>Art</button>

			<ItemList>
				{itemList?.map((item) => {
					return (
						<Wrapper key={item._id}>
							<Link
								to={`/museum/${fetchList}/${item["file-name"]}`}
							>
								<div>{item.name["name-USen"]}</div>
								<img
									src={item.image_uri}
									alt={item["file-name"]}
								/>
							</Link>
						</Wrapper>
					);
				})}
			</ItemList>
		</div>
	);
};

export default Museum;
