import { useState } from 'react';

import { log } from '../../log.ts';

function HistoryItem({ count }: any) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }: any) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count: number, index: number) => (
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
}