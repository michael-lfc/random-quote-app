import { useEffect, useState } from "react";
import Quote from "./Quote";
import "./App.css";

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [quoteCount, setQuoteCount] = useState(1);
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  // Fetch tags once
  useEffect(() => {
    fetch("https://quoteslate.vercel.app/api/tags")
      .then((res) => res.json())
      .then((data) => setTags(data))
      .catch(() => setError("Failed to load tags"));
  }, []);

  // Fetch quotes whenever selectedTags, quoteCount, or author changes
  useEffect(() => {
    if (selectedTags.length === 0 && author.trim() === "") return;
    fetchQuotes();
  }, [selectedTags, quoteCount, author]);

  const fetchQuotes = () => {
    let url = `https://quoteslate.vercel.app/api/quotes/random?count=${quoteCount}`;

    if (selectedTags.length > 0) {
      url += `&tags=${selectedTags.join(",")}`;
    }

    if (author.trim() !== "") {
      url += `&authors=${encodeURIComponent(author.trim())}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let quotesArray = [];

        // Normalize API response to always be an array
        if (Array.isArray(data)) {
          quotesArray = data;
        } else if (data && typeof data === "object") {
          quotesArray = [data];
        }

        if (quotesArray.length === 0) {
          setQuotes([]);
          setError("No quotes found for the selected criteria.");
        } else {
          setQuotes(quotesArray);
          setError("");
        }
      })
      .catch(() => setError("Failed to fetch quotes."));
  };

  // const handleTagChange = (e) => {
  //   const options = Array.from(e.target.selectedOptions, (option) => option.value);
  //   console.log("Values extracted:", options);
  //   setSelectedTags(options);
  // };

  const handleTagChange = (e) => {
  const selectedArray = Array.from(e.target.selectedOptions);

  const values = selectedArray.map(option => option.value);

  setSelectedTags(values);
};


  return (
    <div className="app-container">
      <h1>Random Quote Generator</h1>

      <div className="controls">
        <div className="control-group">
          <label>Select Tags (Multiple Allowed):</label>
          <select multiple value={selectedTags} onChange={handleTagChange}>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Number of Quotes (1–10):</label>
          <input
            type="number"
            min="1"
            max="10"
            value={quoteCount}
            onChange={(e) => setQuoteCount(Number(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label>Search by Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter exact author name"
          />
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="quotes">
        {quotes.map((quote, index) => (
          <Quote key={index} quote={quote} />
        ))}
      </div>
    </div>
  );
}

export default App;
