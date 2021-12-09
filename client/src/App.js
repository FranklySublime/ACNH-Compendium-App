// react import
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// context import
import { WikiProvider } from "./context/WikiContext";

// components import
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Wiki from "./components/Wiki";
import CritterInfo from "./components/Wiki/CritterInfo";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

//styling imports
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

function App() {
	return (
		<BrowserRouter>
			<WikiProvider>
				<GlobalStyles />
				<Wrapper>
					<Header />
					<H1> Hello world 🌍 </H1>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/wiki" element={<Wiki />} />
						<Route
							path="/wiki/:category/:id"
							element={<CritterInfo />}
						/>
						<Route path="/signin" element={<Signin />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</Wrapper>
			</WikiProvider>
		</BrowserRouter>
	);
}

const Wrapper = styled.div``;

const H1 = styled.h1`
	background-color: var(--accent-color);
`;

export default App;
