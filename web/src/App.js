import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [data, setData] = useState({});
  return (
    <div>
      <button
        onClick={async () => {
          try {
            const res = await fetch("http://localhost:3333/category");
            const resJson = await res.json();
            setData(resJson);
          } catch (error) {
            alert(JSON.stringify(error));
          }
        }}
      >
        getData
      </button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
