import React, { Component } from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <ul>
        <li>
          <Link to={`page1`}>page 1</Link>
        </li>
        <li>
          <Link to={`page2`}>page 2</Link>
        </li>
        <li>
          <Link to={"page3"}>page 3</Link>
        </li>
      </ul>
    </div>
  );
}
