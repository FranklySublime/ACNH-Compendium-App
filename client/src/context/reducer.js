export const initialState = {
	_id: null,
	username: null,
	bugs: [],
	fish: [],
	sea: [],
	fossils: [],
	art: [],
	music: [],
};

export const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "receive-user-from-server":
			return {
				...state,
				_id: action._id,
				username: action.username,
				bugs: action.bugs,
				fish: action.fish,
				sea: action.sea,
				fossils: action.fossils,
				art: action.art,
				music: action.music,
			};
		case "add-to-collection":
			let category = action.collection;
			return {
				...state,
				[state[category]]: state[category].push(action.data),
			};
		default:
			throw new Error(
				`STOP RIGHT THERE CRIMINAL SCUM! *unrecognized action: ${action.type}`
			);
	}
};
