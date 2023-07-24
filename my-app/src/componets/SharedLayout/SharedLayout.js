import {
  ContainerHeder,
  Header,
  NavtitelList,
  NavTitleItem,
  Logo,
} from "./SharedLayout.styled";
import { SvgIcon } from "./SvgIcon";
import { IconLog } from "./SvgLog";
// import { AuthTitle } from "componets/MobMenu/MobMenu.styled";

export const SharedLayout = () => {
    return (
      <>
        <ContainerHeder>
          <Header>
            <Logo>
              <SvgIcon />
            </Logo>
            <NavtitelList>
              
              <NavTitleItem>Наши работы</NavTitleItem>
              <NavTitleItem>Контакты</NavTitleItem>
              <IconLog/>
            </NavtitelList>
          </Header>
        </ContainerHeder>
      </>
    );
}