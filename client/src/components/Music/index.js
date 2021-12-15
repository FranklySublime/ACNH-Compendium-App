// importing react
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { WikiContext } from "../../context/WikiContext";

// importing styling stuff
import { ItemList, Wrapper } from "./styled-components";

const Music = () => {
	const { musicList } = useContext(WikiContext);

	return (
		<div>
			<ItemList>
				{musicList?.map((item) => {
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
