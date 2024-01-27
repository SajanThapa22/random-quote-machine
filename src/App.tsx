import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";
import colors from "./assets/colors";

interface Quote {
  quote: string;
  author: string;
}
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [color, setColor] = useState(getRandomColor());
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  };

  return (
    <div className="background" style={{ backgroundColor: color }}>
      <div id="quote-box">
        <div className="quote-content">
          <h2 id="text" style={{ color: color }}>
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            {quote.quote}
          </h2>
          <h4 id="author" style={{ color: color }}>{`- ${quote.author}`}</h4>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              backgroundColor: color,
              marginRight: "10px",
            }}
          >
            <FaTwitter />
          </a>
          <button
            style={{ backgroundColor: color }}
            type="button"
            id="new-quote"
            onClick={changeQuote}
          >
            Change quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
