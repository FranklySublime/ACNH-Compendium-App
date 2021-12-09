import React, { useEffect, useState } from "react";

const AvailableFish = () => {
	const [availableFish, setAvailableFish] = useState(null);

	useEffect(() => {
		fetch("fish/available")
			.then((res) => res.json())
			.then((data) => setAvailableFish(data.data));
	}, []);

	return (
		availableFish && (
			<div>
				{availableFish.map((fish) => {
					return <img src={fish.iconSrc} alt={fish.name} />;
				})}
			</div>
		)
	);
};
export default AvailableFish;
