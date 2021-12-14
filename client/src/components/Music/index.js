// importing react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// importing styling stuff
import { ItemList, Wrapper } from "./styled-components";

const Music = () => {
	const [itemList, setItemList] = useState(null);

	useEffect(() => {
		fetch("/music")
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setItemList(data.data);
				console.log(itemList);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<p>D.J. K.K. In the House!</p>
			<ItemList>
				{itemList?.map((item) => {
					return (
						<Wrapper key={item._id}>
							<Link to={`/music/${item["file-name"]}`}>
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

export default Music;
