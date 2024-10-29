import React from "react";
import "./Home.css";
import ImageSlider from '../components/ImageSlider';

function Home() {
  return (
    <div className="home">
      <ImageSlider />
      <div className="section">
        <h2>Upcoming Events</h2>
        <div className="event">
          <img src="https://spicmacay.org/event-image1.jpg" alt="Event 1" />
          <p>Event Name 1 - Date</p>
        </div>
        <div className="event">
          <img src="https://spicmacay.org/event-image2.jpg" alt="Event 2" />
          <p>Event Name 2 - Date</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
