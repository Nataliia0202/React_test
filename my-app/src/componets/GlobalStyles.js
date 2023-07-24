import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "@fontsource/roboto";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        
        background-color: #F8F8F8;
       font-style: normal;
       font-weight: 400px;
       padding-bottom: 100px;
        
    }

    #root {
        height: 100vh;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    /* #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    } */
    
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }

`;

const size = {
  mobile: "360",
  tablet: "768",
  desktop: "1280",
};

export const device = {
  mobile: `(min-width: ${size.mobile}px)`,
  mobileOnly: `(max-width: ${size.tablet - 0.02}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tabletOnly: `(max-width: ${size.desktop - 0.02}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};
export const MainWrap = styled.div`
  margin-top: 128px;
  text-align: center;
`;

export const ClassicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 2px solid #e3b873;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #fff;
  background-color: #e3b873;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.15);
    color: #e3b873;
    background-color: #fff;
  }
`;

export const AppBarList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const AppBarItem = styled.li`
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.15);
    text-shadow: 0px 5px 10px bisque;
  }
  &:not(:first-child) {
    margin-left:8px;
  }
`;
