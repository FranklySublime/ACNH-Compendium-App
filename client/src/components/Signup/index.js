import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Wrapper, Input, FormWrapper } from "./styled-components";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	let navigate = useNavigate();

	const handleSignup = (e) => {
		e.preventDefault();
		let user = {
			username: username,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
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
					setErrorMessage(json.message);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<Wrapper>
			<FormWrapper onSubmit={(e) => handleSignup(e)}>
				<Input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Input
					type="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="First Name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="Last Name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<button>Create Account</button>
				<div>Already have an account?</div>
				<Link to="/signin">Sign in</Link>
				{error && <div>{errorMessage}</div>}
			</FormWrapper>
		</Wrapper>
	);
};

export default Signup;
