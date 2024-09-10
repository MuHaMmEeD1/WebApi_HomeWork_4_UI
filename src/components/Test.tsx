import axios from "axios";
import { useEffect, useState } from "react";

const Test = () => {
  const [inputValue, setInputValue] = useState("");
  const [token, setToken] = useState("");

  const [resonseValue, setResponseValue] = useState("");

  useEffect(() => {
    GiveToken();
  }, []);

  const GiveToken = async () => {
    const response = await axios.post(
      "https://localhost:7040/api/Login/login",
      {
        userName: "Muhammed",
        password: "Muhammed123_",
      }
    );

    console.dir(response);
    setToken(response.data);
  };

  const TestMetod = async (url: string, token: string) => {
    let respnese = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //   let respnese = await axios.get("https://jsonplaceholder.typicode.com/users"); // test

    setResponseValue(respnese.data);

    console.dir(respnese);
  };

  return (
    <>
      <form action="">
        <h1>{resonseValue}</h1>
        <p>{token}</p>
        <input
          placeholder="url"
          style={{
            width: "300px",
            height: "40px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          type="text"
          value={inputValue}
          onChange={(c) => setInputValue(c.target.value)}
        />

        <button
          onClick={(e) => {
            e.preventDefault();

            //TestMetod(inputValue, token);
            TestMetod(inputValue, token);
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Test;
