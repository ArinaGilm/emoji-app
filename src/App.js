import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

//let allCards = document.querySelector(".choose-emoji");
//https://66c06d30ba6f27ca9a569672.mockapi.io/emoji
function App() {
  const [emojiCard, setEmojiCard] = useState([]);
  const [searchEmogi, setSearchEmoji] = useState("");
  console.log(searchEmogi);
  useEffect(() => {
    fetch("https://66c06d30ba6f27ca9a569672.mockapi.io/emoji")
      .then((response) => response.json())
      .then((emoji) => setEmojiCard(emoji));
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Emoji Finder</h1>
        <p className="header-about_emoji">Find emoji by keywords</p>
      </header>
      <main className="main">
        <form className="form">
          <input
            className="found-emoji"
            onChange={(event) => setSearchEmoji(event.target.value)}
            type="text"
            placeholder="Placeholder"
            value={searchEmogi}
          />
        </form>
        <div className="container">
          {emojiCard
            .filter((elem) => {
              return elem.keywords.includes(searchEmogi) ? true : false;
            })
            .map((elem, index) => (
              <Card elem={elem} index={index}></Card>
            ))}

          {emojiCard
            .filter((elem) => {
              return elem.title.includes(searchEmogi) ? true : false;
            })
            .map((elem, index) => (
              <Card elem={elem} index={index}></Card>
            ))}
        </div>
      </main>
      <footer className="footer">
        <p className="footer-made">2022 © Made with love by me</p>
      </footer>
    </div>
  );
}

export default App;
