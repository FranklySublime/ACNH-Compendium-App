// react import
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// context import
import { WikiProvider } from "./context/WikiContext";
import { UserProvider } from "./context/UserContext";

// components import
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Homepage from "./components/Homepage";
import Critterpedia from "./components/Critterpedia";
import CritterInfo from "./components/Critterpedia/CritterInfo";
import Museum from "./components/Museum";
import Music from "./components/Music";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

//styling imports
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import AlbumInfo from "./components/Music/AlbumInfo";
import ArtifactInfo from "./components/Museum/ArtifactInfo";

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<WikiProvider>
					<GlobalStyles />
					<Wrapper>
						<Header />
						<SubHeader />
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route
								path="/critterpedia"
								element={<Critterpedia />}
							/>
							<Route
								path="/critterpedia/:category/:id"
								element={<CritterInfo />}
							/>
							<Route path="/museum" element={<Museum />} />
							<Route
								path="/museum/:category/:id"
								element={<ArtifactInfo />}
							/>

							<Route path="/music" element={<Music />} />
							<Route path="/music/:id" element={<AlbumInfo />} />

							<Route path="/signin" element={<Signin />} />
							<Route path="/signup" element={<Signup />} />
						</Routes>
					</Wrapper>
				</WikiProvider>
			</UserProvider>
		</BrowserRouter>
	);
}

const Wrapper = styled.div``;

export default App;
