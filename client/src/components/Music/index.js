// importing react
import React, { useEffect, useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { WikiContext } from "../../context/WikiContext";

// importing styling stuff
import {
	WikiWrapper,
	ItemList,
	ItemWrapper,
	AlbumWrapper,
	AlbumImage,
	CaughtWrapper,
	Title,
	SyledLink,
} from "./styled-components";

const Music = () => {
	const { state } = useContext(UserContext);
	const { musicList } = useContext(WikiContext);

	return (
		<WikiWrapper>
			<Title>Now Playing on your Island:</Title>
			<ItemList>
				{musicList?.map((item) => {
					return state.music?.includes(item["file-name"]) ? (
						<SyledLink
							to={`/music/${item["file-name"]}`}
							key={item._id}
						>
							<ItemWrapper>
								<Title>{item.name["name-USen"]}</Title>
								<CaughtWrapper>
									<AlbumImage
										src={item.image_uri}
										alt={item["file-name"]}
									/>
								</CaughtWrapper>
							</ItemWrapper>
						</SyledLink>
					) : (
						<SyledLink
							to={`/music/${item["file-name"]}`}
							key={item._id}
						>
							<ItemWrapper>
								<Title>{item.name["name-USen"]}</Title>
								<AlbumWrapper>
									<AlbumImage
										src={item.image_uri}
										alt={item["file-name"]}
									/>
								</AlbumWrapper>
							</ItemWrapper>
						</SyledLink>
					);
				})}
			</ItemList>
		</WikiWrapper>
	);
};

export default Music;
