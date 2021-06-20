import React from 'react';

import './App.scss';
import {Container} from "@material-ui/core";
import Header from "./containers/header";

function App() {
  return (
      <Container className='App' maxWidth={false}>
        <Header/>
    <main> Main</main>
    </Container>
  );
}

export default App;
