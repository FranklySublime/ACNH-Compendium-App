import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [error, setError] = useState(false);

	let navigate = useNavigate();

	const handleSignup = (e) => {
		e.preventDefault();
		let user = {
			username: username,
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
		};
		fetch("/user/signup", {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.status === 200) {
					console.log("JSON", json);
					navigate("../signin", { replace: true });
				} else if (json.status === 409) {
					setError(true);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<div>
			<form onSubmit={(e) => handleSignup(e)}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<input
					type="text"
					placeholder="First Name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Last Name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<button>Create Account</button>
				{error && (
					<div>
						Looks like that username or email has already been
						registered.
					</div>
				)}
			</form>
		</div>
	);
};

export default Signup;
