import React, { createContext, useEffect, useState } from "react";

export const WikiContext = createContext();

export const WikiProvider = ({ children }) => {
	const [critterList, setCritterList] = useState("bugs");
	const [artifactList, setArtifactList] = useState("fossil");
	const [itemList, setItemList] = useState(null);
	const [museumList, setMuseumList] = useState(null);
	const [musicList, setMusicList] = useState(null);

	// fetch for critterpedia page
	useEffect(() => {
		fetch(`/${critterList}`)
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setItemList(data.data);
				console.log(itemList);
			})
			.catch((err) => console.error(err));
	}, [critterList]);

	// fetch for critterpedia page
	useEffect(() => {
		fetch(`/${artifactList}`)
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setMuseumList(data.data);
				console.log(museumList);
			})
			.catch((err) => console.error(err));
	}, [artifactList]);

	// fetch for collectible music
	useEffect(() => {
		fetch("/music")
			.then((res) => res.json())
			.then((data) => {
				console.log("JSON", data);
				setMusicList(data.data);
				console.log(itemList);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<WikiContext.Provider
			value={{
				critterList,
				setCritterList,
				artifactList,
				setArtifactList,
				itemList,
				setItemList,
				museumList,
				setMuseumList,
				musicList,
				setMusicList,
			}}
		>
			{children}
		</WikiContext.Provider>
	);
};
