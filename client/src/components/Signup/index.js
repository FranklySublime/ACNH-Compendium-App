import React from "react";

const Signup = () => {
	const handleSignup = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form>
				<input placeholder="Username" />
				<input placeholder="email" />
				<input placeholder="Password" />
				<input placeholder="First Name" />
				<input placeholder="Last Name" />
				<button>Create Account</button>
			</form>
		</div>
	);
};

export default Signup;
