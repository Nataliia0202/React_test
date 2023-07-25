import {
  ContainerHeder,
  Header,
  NavtitelList,
  NavTitleItem,
  Logo,
  NavTitleLink,
  IconMenu,
} from "./SharedLayout.styled";
import { SvgIcon } from "./SvgIcon";
import { IconLog } from "./SvgLog";
// import { AuthTitle } from "componets/MobMenu/MobMenu.styled";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const SharedLayout = ({ active }) => {
  const [show, setShow] = useState(false);
  const handleToggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <ContainerHeder>
        <Header>
          <Logo>
            <SvgIcon />
          </Logo>
          <IconMenu onClick={handleToggleShow}>
            {show ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </IconMenu>
          <NavtitelList >
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
        </Header>
      </ContainerHeder>
    </>
  );
};