import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const images = [
    { photo: "/man.gif", interval: 2000 },
    { photo: "/photo.gif", interval: 1000 },
    { photo: "/mom_beat.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (loading || currentIndex === images.length - 1) return; // Stop if loading or last image

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, images[currentIndex]?.interval || 2000);

    return () => clearInterval(interval);
  }, [currentIndex, loading]);

  return (
    <section className="main">
      {loading ? (
        <div className="loading-screen">
          <img src="/logo.png" alt="Logo" className="loading-logo" />
          <img src="/name.png" alt="logo" className="loading-name" />
        </div>
      ) : (
        <div className="photo">
          <img src={images[currentIndex].photo} alt="cycling images" />
          {currentIndex === 2 && <h1>I'll show this to ya mum nigga</h1>}
        </div>
      )}
    </section>
  );
}

export default App;
