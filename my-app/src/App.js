
import React from "react";
import './App.css';
import { SharedLayout } from "componets/SharedLayout/SharedLayout";
import { Container } from "componets/Layout";
import { Hero } from "componets/Hero/Hero";

function App() {
  return (
    <>
      <Container>
        <SharedLayout />
        <Hero />
      </Container>
    </>
  );
}

export default App;
