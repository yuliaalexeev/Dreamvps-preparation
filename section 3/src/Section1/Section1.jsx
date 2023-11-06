import React, { useEffect, useState } from "react";
import { format } from "date-fns";

export default function Section1() {
  const formattedDateTime = format(new Date(), "dd/MM/yyyy HH:mm:ss");

  const [count, setCount] = useState(formattedDateTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(format(new Date(), "dd/MM/yyyy HH:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Section1</h2>
      <p>{count}</p>
    </div>
  );
}
