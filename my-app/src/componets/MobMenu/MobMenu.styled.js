import styled from "styled-components";
import { device, ClassicButton } from "../GlobalStyles";
import { NavTitleItem } from "../SharedLayout/SharedLayout.styled";
import { NavLink } from "react-router-dom";

export const MobMenuWrap = styled.div`
  position: fixed;
  background-color: #FABC80;
  background-image: linear-gradient(
    335deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(94, 94, 98, 0.5) 100%
  );
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  top: 0;
  left: 0;
  padding-top: 88px;
  padding-bottom: 58px;
`;

export const MobMenuOpenButton = styled(ClassicButton)`
  display: none;
  @media ${device.mobileOnly} {
    display: block;
    padding: 0;
    margin-top: 2px;
    height: 40px;
    color: #fff;
  }
`;

export const MobMenuCloseButton = styled(ClassicButton)`
  padding: 0;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 19px;
  color: #fff;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const MobAuthList = styled.ul`
  width: 400px;
  height: 100%;
  margin: 0 auto;
`;

export const MobAuthListItem = styled(NavTitleItem)`
  &:not(:last-child) {
    @media ${device.mobileOnly} {
      margin-bottom: 8px;
    }
  }
`;

export const AuthTitle = styled(NavLink)`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  &.active {
    color: #fff;
  }
`;


