import React, { useContext, useState } from "react";

import { UserContext } from "../../context/UserContext";

import {
	ProgressBar,
	ProgressWrapper,
	Image,
	Tracker,
	Wrapper,
	Title,
} from "./styled-components";

// importing icons
import BugIcon from "../../assets/Bug_NH_Icon.png";
import FishIcon from "../../assets/Fish_NH_Icon.png";
import SeaIcon from "../../assets/Sea_Creature_NH_Icon.png";
import ArtIcon from "../../assets/Famous_Painting_NH_Icon.png";
import MusicIcon from "../../assets/NH-K.K._Slider-Icon.png";

const CollectionTracker = () => {
	const { state } = useContext(UserContext);
	const [bugProgress] = useState(state.bugs.length);
	const [fishProgress] = useState(state.fish.length);
	const [seaProgress] = useState(state.sea.length);
	const [fossilProgress] = useState(state.fossil.length);
	const [artProgress] = useState(state.art.length);
	const [musicProgress] = useState(state.music.length);

	return (
		<Wrapper>
			<Title>Collection Tracker</Title>
			<Tracker>
				<Image src={BugIcon} />
				<ProgressWrapper>
					<ProgressBar
						style={{ width: `${(bugProgress / 80) * 300}px` }}
					/>
				</ProgressWrapper>
				<div>{bugProgress} / 80</div>
			</Tracker>
			<Tracker>
				<Image src={FishIcon} />
				<ProgressWrapper>
					<ProgressBar
						style={{ width: `${(fishProgress / 80) * 300}px` }}
					/>
				</ProgressWrapper>
				<div>{fishProgress} / 80</div>
			</Tracker>
			<Tracker>
				<Image src={SeaIcon} />
				<ProgressWrapper>
					<ProgressBar
						style={{ width: `${(seaProgress / 40) * 300}px` }}
					/>
				</ProgressWrapper>
				<div>{seaProgress} / 40</div>
			</Tracker>
			<Tracker>
				<Image src={"https://acnhcdn.com/latest/MenuIcon/Fossil.png"} />
				<ProgressWrapper>
					<ProgressBar
						style={{ width: `${(fossilProgress / 73) * 300}px` }}
					/>
				</ProgressWrapper>
				<div>{fossilProgress} / 73</div>
			</Tracker>
			<Tracker>
				<Image src={ArtIcon} />
				<ProgressWrapper>
					<ProgressBar
						style={{ width: `${(artProgress / 43) * 300}px` }}
					/>
				</ProgressWrapper>
				<div>{artProgress} / 43</div>
			</Tracker>
			<Tracker>
				<Image src={MusicIcon} />
				<ProgressWrapper>
					<ProgressBar
						style={{ width: `${(musicProgress / 95) * 300}px` }}
					/>
				</ProgressWrapper>
				<div>{musicProgress} / 95</div>
			</Tracker>
		</Wrapper>
	);
};

export default CollectionTracker;
