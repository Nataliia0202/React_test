import styled from "styled-components";
import background from "../../images/Group.png"

export const NavWraper = styled.div`
  /* justify-content: center;
  align-items: center;
  line-height: 25px; */
  @media screen and (max-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    /* left: -100%; */

    right: 0;
    top: 0;
    /* bottom: 0; */
    width: 100vw;
    height: 100vh;
    background-color: #f7c8b2;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: contain;
    
    z-index: 10;
    overflow: auto;
  }
`;


export const NavtitelList = styled.ul`
  line-height: 25px;
  @media screen and (min-width: 835px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 834px) {
    display: none;
  }
`;

export const NavTitleItem = styled.li`
  gap: 10px;
  @media screen and (max-width: 834px) {
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
  @media screen and (max-width: 834px) {
    font-size: 30px;
  }
  &:hover {
    transform: scale(1.15);
    text-shadow: 0px 5px 10px bisque;
  }
`;

export const IconMenu = styled.div`
  display: none;
  @media screen and (max-width: 834px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 30px;
    cursor: pointer;
    z-index: 10;
  }
`;


export const MobMenuList = styled.ul`
line-height: 25px;
  @media screen and (min-width: 835px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  

`

export const MobMenuItem = styled.li`
  gap: 10px;
  @media screen and (max-width: 834px) {
    margin: 20px 0;
  }
`;

export const MobMenuLink = styled.a`
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