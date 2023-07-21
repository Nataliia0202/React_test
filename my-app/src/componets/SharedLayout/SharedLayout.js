import { ContainerHeder, Header, NavTitle, Logo } from "./SharedLayout.styled";
import { SvgIcon } from "./SvgIcon";

export const SharedLayout = () => {
    return (
      <>
        <ContainerHeder>
          <Header>
            <Logo>
              <SvgIcon />
            </Logo>
            <nav>
              <NavTitle>О компании</NavTitle>
              <NavTitle>Услуги</NavTitle>
              <NavTitle>Цены</NavTitle>
              <NavTitle>Наши работы</NavTitle>
              <NavTitle>Контакты</NavTitle>
            </nav>
          </Header>
        </ContainerHeder>
      </>
    );
}