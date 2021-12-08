import React, { createContext, useState } from "react";

export const WikiContext = createContext();

export const WikiProvider = ({ children }) => {
	const [fetchList, setFetchList] = useState("bugs");

	return (
		<WikiContext.Provider
			value={{
				fetchList,
				setFetchList,
			}}
		>
			{children}
		</WikiContext.Provider>
	);
};
