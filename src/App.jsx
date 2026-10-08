import { useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.png";

function App() {
  const [points, setPoints] = useState(0);

  const increasePoints = () => {
    setPoints((currentPoints) => currentPoints + 1);
  };

  return (
    <div className="app">
      <div className="profile-card">
        {/* Header */}
        <header className="header">
          <h1>My Profile</h1>
        </header>

        {/* Profile content */}
        <main className="profile-content">
          {/* Profile image */}
          <div className="profile-image">
          <img
            src={profileImage}
            alt="Chamindu Hansana"
            className="avatar"
          />

          <div className="verified">✓</div>
        </div>
          <div className="divider"></div>

          {/* Name */}
          <section className="profile-item">
            <h2>Name</h2>
            <p>Amandi Rajapaksha</p>
          </section>

          {/* Email */}
          <section className="profile-item">
            <h2>Email</h2>
            <p>
              <span className="icon">✉</span>
              amandi2003@gmail.com
            </p>
          </section>

          {/* Points */}
          <section className="profile-item">
            <h2>Points</h2>
            <p>
              <span className="star">★</span>
              {points}
            </p>
          </section>
        </main>

        {/* Add points button */}
        <button
          className="add-button"
          onClick={increasePoints}
          aria-label="Increase points"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;