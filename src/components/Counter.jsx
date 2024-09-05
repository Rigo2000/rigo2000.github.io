import { useState } from "react";
import Button from "./Button";
import Propper from "./Propper";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Propper message={count}></Propper>
      <Button count={count} setCount={setCount} option={"minus"} />
      <Button count={count} setCount={setCount} option={"plus"} />
    </>
  );
}
