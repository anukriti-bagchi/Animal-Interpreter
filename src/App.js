import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐵": "MONKEY",
  "🐶": "DOG",
  "🐺": "WOLF",
  "🐱": "CAT",
  "🐴": "HORSE",
  "🐯": "TIGER",
  "🐮": "COW",
  "🐷": "PIG",
  "🐰": "RABBIT",
  "🐭": "MOUSE",
  "🐻": "BEAR",
  "🐼": "PANDA",
  "🐨": "KOALA",
  "🐔": "CHICKEN",
  "🐸": "FROG",
  "🐬": "DOLPHINE",
  "🐋": "WHALE",
  "🐙": "OCTOPUS",
  "🐧": "PENGUIN"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    //processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning); //react call to show output
  }

  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react call to show output
  }

  return (
    <div className="App">
      <h1> Animal Interpreter </h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      {/* actual output set by react using usestate  */}

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

/**
 * 
 if we do the above thing using prompt it could be like this:
 var username = prompt("Give me your name");
 */

/**
 * things to notice,
 * in react in place of class we use className
 * style takes an object instead of a string in jsx
 * tags and attributes works similarly as in html
 */
