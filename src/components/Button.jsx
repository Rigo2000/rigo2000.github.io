import Propper from "./Propper";
import Counter from "./Counter";

export default function Button({ count, setCount, option }) {
  if (option == "plus") {
    return (
      <>
        <button
          onMouseDown={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </>
    );
  } else if (option == "minus") {
    return (
      <>
        <button
          onMouseDown={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </>
    );
  }
}
