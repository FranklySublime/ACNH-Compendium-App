export const initialState = {
	_id: null,
	username: null,
	reload: false,
	bugs: [],
	fish: [],
	sea: [],
	fossils: [],
	art: [],
	music: [],
};

export const reducer = (state, action) => {
	console.log(action);
	let category = action.collection;
	switch (action.type) {
		case "trigger-reload":
			return {
				...state,
				reload: !state.reload,
			};
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
			state[category].push(action.data);
			return {
				...state,
			};
		case "remove-from-collection":
			state[category].splice(state[category].indexOf(action.data), 1);
			return {
				...state,
			};
		default:
			throw new Error(
				`STOP RIGHT THERE CRIMINAL SCUM! *unrecognized action: ${action.type}`
			);
	}
};
