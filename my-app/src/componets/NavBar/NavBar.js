import {
  // NavWraper,
  NavtitelList,
  NavTitleItem,
  NavTitleLink,
  // IconMenu,
} from "./NavBar.styled.js";

import { IconLog } from "./SvgLog";

// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { useState } from "react";


export const NavBar = () => {
 

  return (
    <>
      <NavtitelList>
        <NavTitleItem>
          <NavTitleLink>О компании</NavTitleLink>
        </NavTitleItem>
        <NavTitleItem>
          <NavTitleLink>Услуги</NavTitleLink>
        </NavTitleItem>
        <NavTitleItem>
          <NavTitleLink>Цены</NavTitleLink>
        </NavTitleItem>
        <NavTitleItem>
          <NavTitleLink>Наши работы</NavTitleLink>
        </NavTitleItem>
        <NavTitleItem>
          <NavTitleLink>Контакты</NavTitleLink>
        </NavTitleItem>
        <NavTitleItem>
          <NavTitleLink>
            <IconLog />
          </NavTitleLink>
        </NavTitleItem>
      </NavtitelList>
    </>
  );
};