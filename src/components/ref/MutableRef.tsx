import { useState, useRef, useEffect } from "react";
export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  // we can leave it as undefined
  const interValRef = useRef<number | undefined>(undefined);

  //incase if we want to put as null
  //Another way
  //   const interValRef1 = useRef<number | null>(null);

  const stopTimer = () => {
    //if value is null may have to make a check here if condition
    // if (interValRef.current) {
    //   window.clearInterval(interValRef.current);
    // }

    //or else the if condition check is not needed when it is defined as undefined
    window.clearInterval(interValRef.current);
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    });
    return () => {
      stopTimer();
    };
  });
  return (
    <div>
      Hook -{timer}-<button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
