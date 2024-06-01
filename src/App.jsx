import React, { useEffect, useState } from "react";
import Background from "./Component/Background/Background";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import "./index.css"; // Import Tailwind CSS

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval((count) => {
      return count === 2 ? 0 : count + 1;
    }, 3000);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        heroData={heroData[heroCount]}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
