import { useState, useEffect } from "react";

export default function useTimer(intervalValue) {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setInterval(() => {
      // console.log(timer);
      setTimer(function (currentValue) {
        console.log(currentValue, " I am previous value");
        // currentValue++;
        return currentValue + 1;
      });
    }, intervalValue);
  }, [intervalValue]);

  return timer;
}
