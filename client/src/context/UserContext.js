import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const receiveUserFromServer = (data) => {
		dispatch({
			type: "receive-user-from-server",
			...data,
		});
	};

	const addToCollection = (collection, data) => {
		console.log(data);
		dispatch({
			type: "add-to-collection",
			data,
			collection,
		});
	};

	// checks localStorage for user _id, if found, it fetches.
	useEffect(() => {
		let _id = localStorage.getItem("_id");

		_id &&
			fetch(`/user/${_id}`)
				.then((res) => res.json())
				.then((data) => {
					receiveUserFromServer(data);
					console.log(data);
				});
	}, []);

	return (
		<UserContext.Provider
			value={{
				state,
				actions: {
					receiveUserFromServer,
					addToCollection,
				},
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
