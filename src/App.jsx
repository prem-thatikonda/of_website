import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const images = [
    {
      photo: "/man.gif",
      interval: 2000,
    },
    {
      photo: "/photo.gif",
      interval: 1000,
    },
    {
      photo: "/mom_beat.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === images.length - 1) return; // Stop at last image

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, images[currentIndex]?.interval || 2000); // Use specified interval or default 2000ms

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="main">
      <div className="photo">
        <img src={images[currentIndex].photo} alt="cycling images" />
        {currentIndex === 2 && <h1>I'll show this to ya mum nigga</h1>}
      </div>
    </section>
  );
}

export default App;
