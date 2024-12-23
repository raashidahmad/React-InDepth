import { log } from '../../log.ts';

export const IconButton = ({ children, icon, ...props }: any) => {
  log('<IconButton /> rendered', 2);
  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
}
