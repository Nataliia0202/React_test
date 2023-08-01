
import React from "react";
import './App.css';
import { GlobalStyle } from "componets/GlobalStyles";
import { SharedLayout } from "componets/SharedLayout/SharedLayout";
import { Container } from "componets/Layout";
import { Hero } from "componets/Hero/Hero";
import { WorkOur } from "componets/WorkOur/WorkOur";


function App() {
  return (
    <>
      
      <Container>
        <SharedLayout />
        <Hero />
        <WorkOur/>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
