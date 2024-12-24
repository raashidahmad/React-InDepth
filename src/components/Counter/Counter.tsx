import { memo, useCallback, useMemo, useState } from 'react';

import { log } from '../../log.js';
import { MinusIcon } from '../UI/Icons/MinusIcon.tsx';
import { PlusIcon } from '../UI/Icons/PlusIcon.tsx';
import { CounterOutput } from './CounterOutput.tsx';
import IconButton from '../UI/IconButton.tsx';
import CounterHistory from './CounterHistory.tsx';

function isPrime(number: number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter = memo(({ initialCount }: any) => {
  log('<Counter /> rendered', 1);
  const [counterChanges, setCounterChanges] = useState([{id: Math.random() * 1000, value: initialCount}]);
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

  //const [counter, setCounter] = useState(initialCount);
  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value, 0
  );
  const handleDecrement = useCallback(() => {
    // setCounter((prevCounter: number) => prevCounter - 1);
    setCounterChanges((prevCounterChanges) => [{ value: -1, id: Math.random() * 1000}, ...prevCounterChanges]);
  }, []);
    

  const handleIncrement = useCallback(() => {
    //setCounter((prevCounter: number) => prevCounter + 1);
    setCounterChanges((prevCounterChanges) => [{value: 1, id: Math.random() * 1000}, ...prevCounterChanges]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <div>
      <CounterHistory history={counterChanges} />
      </div>
    </section>
  );
});
export default Counter;
