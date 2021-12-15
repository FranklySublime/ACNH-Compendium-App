// creating a function to capitalize my names
export const capitalizeNames = (name) => {
	const arr = name.split(" ");

	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	let newName = arr.join(" ");
	return newName;
};

export const rangeToMonth = (range) => {
	let arr = range.split("-");

	for (let i = 0; i < arr.length; i++) {
		let date = Date.parse(arr[i] + " 15, 2021");
		let options = { month: "long" };

		if (!isNaN(date)) {
			arr[i] =
				new Intl.DateTimeFormat("en-US", options).format(date) +
				arr[i].slice(arr[i].length);
		}
	}
	let monthRange = arr.join(" - ");
	return monthRange;
};
