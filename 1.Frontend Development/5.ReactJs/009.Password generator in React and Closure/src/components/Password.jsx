import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
function Password() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [characterchange, setCharacterchange] = useState(false);
  const [numberchange, setNumberchange] = useState(false);

  // function generate() {
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (characterchange) {
  //     str += "~`!@#$%^&*()-_=+[{]}\|;:'?/>.<,";
  //   }
  //   if (numberchange) {
  //     str += "0123456789";
  //   }
  //   let final = "";
  //   for (let i = 0; i < length; i++) {
  //     final += str[Math.floor(Math.random() * str.length)];
  //   }
  //   setPassword(final)
  // }
  const generate = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (characterchange) {
      str += "~`!@#$%^&*()-_=+[{]}\|;:'?/>.<,";
    }
    if (numberchange) {
      str += "0123456789";
    }
    let final = "";
    for (let i = 0; i < length; i++) {
      final += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(final);
  }, [length, numberchange, characterchange]);
  // useEffect(() => {
  //   generate();
  // }, [length, numberchange, characterchange]);
  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <>
      <div className="container">
        <h1>{password}</h1>
        <div style={{ marginTop: "30px" }}>
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length is {length}</label>

          <input
            type="checkbox"
            defaultChecked={characterchange}
            onChange={() => setCharacterchange(!characterchange)}
          />
          <label>Character</label>
          <input
            type="checkbox"
            defaultChecked={numberchange}
            onChange={() => setNumberchange(!numberchange)}
          />
          <label>Number</label>
        </div>
      </div>
    </>
  );
}
export default Password;
