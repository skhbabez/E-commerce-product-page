interface SpinButtonProps {
  value: number;
  onClick: (newValue: number) => void;
}

const SpinButton = ({ value, onClick }: SpinButtonProps) => {
  const increment = () => {
    onClick(value + 1);
  };
  const decrement = () => {
    onClick(Math.max(value - 1, 0));
  };
  return (
    <div>
      <button onClick={decrement}>minus</button>
      <output> {Math.floor(Math.max(value, 0))}</output>
      <button onClick={increment}>plus</button>
    </div>
  );
};
export default SpinButton;
