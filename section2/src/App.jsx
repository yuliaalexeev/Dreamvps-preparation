import React, { useState } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState("");

  async function getPosts() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setResult(JSON.stringify(res.data, null, 2));
    } catch (error) {
      setError("An error occurred while fetching posts.");
    }
  }

  async function getComments() {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setResult(JSON.stringify(res.data.id, null, 2));
    } catch (error) {
      setError("An error occurred while fetching comments.");
    }
  }

  return (
    <>
      <div>
        <button onClick={getPosts}>Get Posts (GET request)</button>
        <button onClick={getComments}>Get Comments (POST request)</button>

        <div className="results">{result && <pre>{result}</pre>}</div>
      </div>
    </>
  );
}

export default App;
