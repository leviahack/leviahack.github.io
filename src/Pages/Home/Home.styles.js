import styled from "styled-components";
import BG from "../../Assets/bg-03-text-h.jpg";

export const ContainerHome = styled.section`
	background-image: url(${BG});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 100vh;
	width: 100%;
`;

export const ContainerAboutUs = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 100vh;
	width: 100%;
`;

export const Title = styled.h1`
	color: #fff;
	font-size: 60px;
	backdrop-filter: blur(5px);
	height: 50px;
	padding: 30px 0 ;
`;