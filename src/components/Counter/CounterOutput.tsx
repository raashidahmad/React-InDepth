import { log } from '../../log.ts';

export const CounterOutput = ({ value }: any) => {
  log('<CounterOutput /> rendered', 2);

  const cssClass = value >= 0 ? 'counter-output' : 'counter-output negative';
  return <span className={cssClass}>{value}</span>;
}