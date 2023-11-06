import React from "react";
import { format, compareAsc, parseISO } from "date-fns"; // Import parseISO

export default function Section2() {
  const hours = format(new Date(), "HH");
  const minutes = format(new Date(), "mm");
  const seconds = format(new Date(), "ss");

  function randomHours() {
    const randomNumber = Math.floor(Math.random() * 24);
    return randomNumber < 10 ? "0" + randomNumber : randomNumber;
  }

  function randomMinutesAndSeconds() {
    const randomNumber = Math.floor(Math.random() * 60);
    return randomNumber < 10 ? "0" + randomNumber : randomNumber;
  }

  function checkIfGreater() {
    const randomTime =
      randomHours() +
      ":" +
      randomMinutesAndSeconds() +
      ":" +
      randomMinutesAndSeconds();

    const currentTime = hours + ":" + minutes + ":" + seconds;

    const randomTimeDate = parseISO(`2023-12-30T${randomTime}`);
    const currentTimeDate = parseISO(`2023-12-30T${currentTime}`);

    const comparison = compareAsc(currentTimeDate, randomTimeDate);

    if (comparison === 1) {
      return "YES";
    }
    return "NO";
  }

  const result = checkIfGreater();

  return (
    <div>
      <h2>Section2 and 3</h2>
      <p>
        <strong>Current Time:</strong> {hours}:{minutes}:{seconds}
      </p>
      <p>
        <strong>Random Time:</strong> {randomHours()}:
        {randomMinutesAndSeconds()}:{randomMinutesAndSeconds()}
      </p>
      <p>
        <strong>Is Random Time Greater?</strong> {result}
      </p>
      <hr />
    </div>
  );
}
