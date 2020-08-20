import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import Message from "./Message";
import "./App.css";
import firebase from "firebase";
import db from "./firebase";
import FlipMove from "react-flip-move";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

function App() {
  function scroll() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  const [input, setInput] = useState("");
  const scrolltoBottom = () => {};

  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");
  /* console.log(messages); */

  // useState= it's just the variable.
  // useEffect= runs on condition is meet

  useEffect(() => {
    // codes goes here
    // if it's blank in the [](dependecies ), then these codes will runs once when the component loads

    setUserName(prompt("Enter Your Name"));
  }, []); // works once when pages is loaded

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = (e) => {
    db.collection("messages").add({
      message: input,
      userName: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // when the button is fire up then the messages in the input field is pushed in the messages array ;
    // even we can use the event prevent default behaviour in these place beacuse whenever you press the button form is being submit. event.preventDefault();
    /* 
    setMessages([...messages, { userName: username, message: input }]);
    setInput(""); */
    setInput("");
  };

  return (
    <>
      <div className="App">
        <Navbar />

        <h1 onClick={scroll}> Welcome {username}</h1>

        <FlipMove>
          {messages
            .slice(0)
            .reverse()
            .map(({ id, message }) => (
              <Message key={id} userName={username} message={message} />
            ))}
        </FlipMove>
      </div>
      <form className="app__form">
        <FormControl id="app__formControl" className="formControl">
          <div className="app__formInput">
            <Input
              id="app__formInput"
              placeholder="Enter some messages..."
              type="text"
              value={input}
              onChange={handleChange}
            />
          </div>
          <div className="app__formIconButton">
            <IconButton
              id="app__formIconButton"
              className="app__iconButton"
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleClick}
            >
              <SendIcon />
            </IconButton>
          </div>
        </FormControl>
      </form>
    </>
  );
}

export default App;
