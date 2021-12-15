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
	if (range.includes("&")) {
		let modifiedRange = range.split(" & ");
		let arr1 = modifiedRange[0].split("-");
		let arr2 = modifiedRange[1].split("-");

		for (let i = 0; i < arr1.length; i++) {
			let date = Date.parse(arr1[i] + " 15, 2021");
			let options = { month: "long" };

			if (!isNaN(date)) {
				arr1[i] =
					new Intl.DateTimeFormat("en-US", options).format(date) +
					arr1[i].slice(arr1[i].length);
			}
		}
		let monthRange1 = arr1.join(" - ");
		for (let i = 0; i < arr2.length; i++) {
			let date = Date.parse(arr2[i] + " 15, 2021");
			let options = { month: "long" };

			if (!isNaN(date)) {
				arr2[i] =
					new Intl.DateTimeFormat("en-US", options).format(date) +
					arr2[i].slice(arr2[i].length);
			}
		}
		let monthRange2 = arr2.join(" - ");
		let monthRange = monthRange1.concat(" & ", monthRange2);
		return monthRange;
	} else {
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
	}
};
