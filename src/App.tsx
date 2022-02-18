import { useState } from "react";
import Tweet from "./components/Tweet";

import "./App.css";

const App = () => {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
  ]);

  const createTweet = () => setTweets([...tweets, "Tweet 5"]);

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet} text={tweet} />
      ))}
      <button
        onClick={createTweet}
        style={{
          backgroundColor: "#8257e2",
          border: 0,
          borderRadius: 5,
          padding: "6px 12px",
          color: "#FFF",
        }}
      >
        Adicionar Tweet
      </button>
    </div>
  );
};

export default App;
