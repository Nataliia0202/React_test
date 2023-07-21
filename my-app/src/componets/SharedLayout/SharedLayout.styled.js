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

  padding: 13px 0;
  background-color: #fff;

  > nav {
    display: flex;
  }
`;

export const NavTitle = styled.p`
  padding: 4px 22px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.03em;
  
`;

export const Logo = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
`;

