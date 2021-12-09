import React, { useEffect, useState } from "react";

const AvailableBugs = () => {
	const [availableBugs, setAvailableBugs] = useState(null);

	useEffect(() => {
		fetch("bugs/available")
			.then((res) => res.json())
			.then((data) => setAvailableBugs(data.data));
	}, []);

	return (
		availableBugs && (
			<div>
				{availableBugs.map((bug) => {
					return <img src={bug.iconSrc} alt={bug.name} />;
				})}
			</div>
		)
	);
};

export default AvailableBugs;
