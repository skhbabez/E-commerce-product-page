import { useId, useRef } from "react";
import styles from "./SpinButton.module.css";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";
interface SpinButtonProps {
  label?: string;
  value: number;
  min: number;
  max: number;
  onClick: (newValue: number) => void;
}

const SpinButton = ({ value, min, max, label, onClick }: SpinButtonProps) => {
  const id = useId();
  const outputRef = useRef<HTMLOutputElement>(null);
  const normalizeValue = (newValue: number) => {
    return Math.floor(Math.max(Math.min(Math.floor(newValue), max), min));
  };
  const increment = () => {
    onClick(normalizeValue(value + 1));
  };
  const decrement = () => {
    onClick(normalizeValue(value - 1));
  };

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLOutputElement>
  ) => {
    if (event.key === "ArrowDown") {
      decrement();
    }
    if (event.key === "ArrowUp") {
      increment();
    }
  };

  const focusHandler = () => {
    const output = outputRef.current;
    if (output) {
      output.focus();
    }
  };
  return (
    <div className={styles.spinbutton} tabIndex={-1} onFocus={focusHandler}>
      <button
        tabIndex={-1}
        type="button"
        aria-controls={id}
        aria-label="Decrement"
        aria-keyshortcuts="ArrowDown"
        onClick={decrement}
      >
        <Minus />
      </button>
      <output
        ref={outputRef}
        role="spinbutton"
        tabIndex={0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={normalizeValue(value)}
        aria-valuetext={String(normalizeValue(value))}
        aria-label={label}
        id={id}
        onKeyDown={onKeyDownHandler}
      >
        {" "}
        {normalizeValue(value)}
      </output>
      <button
        tabIndex={-1}
        type="button"
        aria-controls={id}
        aria-label="Increment"
        aria-keyshortcuts="ArrowUp"
        onClick={increment}
      >
        <Plus />
      </button>
    </div>
  );
};
export default SpinButton;
