import { useState } from 'react';

import './App.css';
import { Header } from './components/Header';
import Counter from './components/Counter/Counter';
import { log } from './log';
import { ConfigureCounter } from './components/Counter/ConfigureCounter';

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  function updateChosenCount(num: number) {
    setChosenCount(num);
  }
  
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter updateChosenCount={updateChosenCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}
export default App;
