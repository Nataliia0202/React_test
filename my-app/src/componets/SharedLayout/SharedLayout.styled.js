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
  /* background-color: #fff; */
  border-bottom: 1px solid #e5e5e5;
  min-width: 100%;
`;
export const NavtitelList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: -100%;
    overflow: auto;
    right: 0;
    top: 0;
    /* bottom: 0; */
    width: 100%;
    height: 100vh;
    background-color: #f7c8b2;
    z-index: 10;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .active {
    left: 0;
  }
`;


export const NavTitleItem = styled.li`
  gap: 10px;
  @media screen and (max-width: 768px){
 margin: 20px 0;
  }
`;

export const NavTitleLink = styled.a`
  cursor: pointer;
  padding: 4px 22px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.03em;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
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

export const IconMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 30px;
    cursor: pointer;
    z-index: 10;
  }
`;

