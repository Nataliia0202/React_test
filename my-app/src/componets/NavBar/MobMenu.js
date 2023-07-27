import { MobMenuList, MobMenuItem, MobMenuLink } from "./NavBar.styled";
import { NavTitleLink } from "./NavBar.styled";
import { IconLog } from "./SvgLog";


export const MobMenu = () => {
  return (
    <>
      <MobMenuList>
        <MobMenuItem>
          <MobMenuLink>О компании</MobMenuLink>
        </MobMenuItem>
        <MobMenuItem>
          <MobMenuLink>Услуги</MobMenuLink>
        </MobMenuItem>
        <MobMenuItem>
          <MobMenuLink>Цены</MobMenuLink>
        </MobMenuItem>
        <MobMenuItem>
          <MobMenuLink>Наши работы</MobMenuLink>
        </MobMenuItem>
        <MobMenuItem>
          <MobMenuLink>Контакты</MobMenuLink>
        </MobMenuItem>
        <MobMenuItem>
          <NavTitleLink>
            <IconLog />
          </NavTitleLink>
        </MobMenuItem>
      </MobMenuList>
    </>
  );
};