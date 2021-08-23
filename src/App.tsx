import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import Routing from './core/Routing';
import { Tabs } from './core/Tabs';

function App() {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <div className={styles.routing}>
          <Routing />
        </div>
        <Tabs />
      </BrowserRouter>
    </div>
  );
}

export default App;
