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

	// check whether we need a reload of our state

	const triggerReload = () => {
		dispatch({
			type: "trigger-reload",
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
	}, [state.reload]);

	// adds the current item to a users collection
	const addToCollection = (collection, data) => {
		console.log(data);
		let _id = localStorage.getItem("_id");

		fetch(`/user/collection/${collection}/${data}`, {
			method: "PATCH",
			body: JSON.stringify({
				_id: _id,
			}),
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				console.log("JSON", json);
			});
		dispatch({
			type: "add-to-collection",
			data,
			collection,
		});
	};

	// removes the current item to a users collection
	const removeFromCollection = (collection, data) => {
		console.log(data);
		let _id = localStorage.getItem("_id");

		fetch(`/user/collection/${collection}/${data}`, {
			method: "DELETE",
			body: JSON.stringify({
				_id: _id,
			}),
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				console.log("JSON", json);
			});
		dispatch({
			type: "remove-from-collection",
			data,
			collection,
		});
	};

	return (
		<UserContext.Provider
			value={{
				state,
				actions: {
					triggerReload,
					receiveUserFromServer,
					addToCollection,
					removeFromCollection,
				},
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
