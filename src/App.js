import React from "react";
// import './App.css';

const api = {
  key: "59f713d9965bde5a5c6bc406ffa813c1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div class-name="search-box">
          <input 
          type="text" 
          className="search-bar" 
          placeholder="search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
