export const initialState = {
	_id: null,
	username: null,
	reload: false,
	bugs: [],
	fish: [],
	sea: [],
	fossil: [],
	art: [],
	music: [],
	fossils: [false, false, false, false],
	moneyTree: false,
	bottle: false,
	rocks: [false, false, false, false, false, false],
};

export const reducer = (state, action) => {
	console.log(action);
	let category = action.collection;
	let index = action.index;
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
				fossil: action.fossil,
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
		case "toggle-fossil":
			let copiedFossils = [...state.fossils];
			copiedFossils[index] = !copiedFossils[index];
			return {
				...state,
				fossils: copiedFossils,
			};
		case "toggle-rock":
			let copiedRocks = [...state.rocks];
			copiedRocks[index] = !copiedRocks[index];
			return {
				...state,
				rocks: copiedRocks,
			};
		case "toggle-money-tree":
			return {
				...state,
				moneyTree: !state.moneyTree,
			};
		case "toggle-bottle":
			return {
				...state,
				bottle: !state.bottle,
			};
		case "sign-out":
			return initialState;

		default:
			throw new Error(
				`STOP RIGHT THERE CRIMINAL SCUM! *unrecognized action: ${action.type}`
			);
	}
};
