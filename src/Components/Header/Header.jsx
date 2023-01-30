import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUsers, faMessage, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Header, Logo, List, Item, MenuResposive } from "./Header.styles";
import Levihack from '../../Assets/leviahack.png';

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpen = () => setOpenMenu(!openMenu);

	return(
    <Header>
      <Logo>
        <a href="/">
          <img src={Levihack} alt="home" width="60"/>
        </a>
      </Logo>
      <List>
        <Item>
          <a href="#about-us">About Us</a>
        </Item>
        <Item>
          <a href="#team">Team</a>
        </Item>
        <Item>
          <a href="#contact">Contact</a>
        </Item>
      </List>
      <MenuResposive>
        {
          !openMenu ? (
            <FontAwesomeIcon icon={faBars} size="lg" onClick={handleOpen}/>
          ) : (
            <FontAwesomeIcon icon={faXmark} size="xl" onClick={handleOpen}/>
          )
        }
        {
          openMenu && (
            <ul>
              <li>
                <a href="/">
                  <img src={Levihack} alt="home" width="100"/>
                </a>
              </li>
              <li>
                <a href="#about-us" onClick={() => setOpenMenu(false)}>
                  <FontAwesomeIcon icon={faCircleInfo} size="lg" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" onClick={() => setOpenMenu(false)}>
                  <FontAwesomeIcon icon={faUsers} size="lg" />
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setOpenMenu(false)}>
                  <FontAwesomeIcon icon={faMessage} size="lg" />
                  Contact
                </a>
              </li>
            </ul>
          )
        }
      </MenuResposive>
    </Header>
	);
}

export default Home;