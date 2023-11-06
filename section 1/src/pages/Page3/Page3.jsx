import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

export default function Page3() {
  let navigate = useNavigate();

  function handleClick() {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div>
      Page3
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    </div>
  );
}
