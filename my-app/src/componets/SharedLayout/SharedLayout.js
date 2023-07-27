import {
  ContainerHeder,
  Header,
  Logo,
  
} from "./SharedLayout.styled";
import { SvgIcon } from "./SvgIcon";
import { useState } from "react";
import { NavBar } from "componets/NavBar/NavBar";
import { NavWraper, IconMenu } from "componets/NavBar/NavBar.styled";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { IconLog } from "componets/NavBar/SvgLog";
import { MobMenu } from "componets/NavBar/MobMenu";

export const SharedLayout = () => {
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
            <AiOutlineMenu size={25} />
          </IconMenu>
          {show ? (
            <NavWraper>
              <IconMenu onClick={handleToggleShow}>
                <AiOutlineClose size={25} />
              </IconMenu>
              <MobMenu />
            </NavWraper>
          ) : (
            <NavBar />
          )}
        </Header>
      </ContainerHeder>
    </>
  );
};