import styled from "styled-components";

export const ContainerHeder = styled.div`
  max-width: 100%;
  @media screen and (min-width: 1170px) {
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  padding: 13px 10px;
  background-color: #fff;

  
`;
export const NavtitelList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavTitleItem = styled.li`
  cursor: pointer;
  padding: 4px 22px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.03em;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.15);
    text-shadow: 0px 5px 10px bisque;
  }
`;

export const Logo = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
`;

