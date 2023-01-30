import React from "react";
import AboutUs from "../../Components/AboutUs";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header";
import Team from "../../Components/Team/Team";
import TextCaption from "../../Components/TextCaption";
import { ContainerHome, ContainerAboutUs } from "./Home.styles";

const Home = () => {
	return(
		<>
			<ContainerHome>
				<Header/>
				<TextCaption/>
			</ContainerHome>
			<ContainerAboutUs>
				<AboutUs/>
			</ContainerAboutUs>
			<ContainerAboutUs>
				<Team/>
			</ContainerAboutUs>
			<ContainerAboutUs>
				<Contact/>
			</ContainerAboutUs>
		</>
	);
}

export default Home;