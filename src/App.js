import { useState, useEffect } from 'react';
import './App.css';
let emojes = document.querySelector(".choose-emoji")
//https://66c06d30ba6f27ca9a569672.mockapi.io/emoji
function App() {

const  [emojiCard, setEmojiCard] = useState([]);
console.log(emojiCard);

useEffect(() => {
   fetch("https://66c06d30ba6f27ca9a569672.mockapi.io/emoji")
   .then(response => response.json())
   .then(json => console.log(json));
  },[]);


  return (
    <div className="App">

    </div>
  );
}

export default App;
