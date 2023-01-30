import styled from "styled-components";
import { Size } from "../../Constants/SizesMediaQueries";

export const Header = styled.nav`
	display: block;
	width: 100%;
`;

export const Logo = styled.span`
	position: absolute;
	margin: 20px 5%;
`;

export const List = styled.ul`
	display: flex;
	justify-content: flex-end;
	list-style: none;
  padding: 0;
  margin: 15px 0;
`;

export const Item = styled.li`
	transition: 0.4s ease;
	text-align: center;
	width: 10%;

	a {
		color: #333;
		font-size: 1rem;
		font-weight: 700;
		display: block;
		text-decoration: none;
		padding: 15px 10px;
	}

	&:hover {
		border-top: 4px solid #1f7391;

		a {
			color: #1f7391;
		}
	}

	@media (max-width: ${Size.tablet}) {
    display: none;
  }
`;

export const MenuResposive = styled.div`
	display: none;

	ul {
		background: #fff;
    position: absolute;
    width: 60%;
    height: 100vh;
    top: 0;
    margin: 0;
		padding: 20px;
    list-style: none;
		z-index: 9;

		li {
			padding: 30px 0;

			a {
				color: #1f7391;
				text-decoration: none;
			}

			&:first-child {
				border-bottom: 2px solid #1f7391;
				display: block;
				text-align: center;
			}
		}
	}

	@media (max-width: ${Size.tablet}) {
		display: block;

		svg {
			position: absolute;
			right: 10%;
		}
	}
`;