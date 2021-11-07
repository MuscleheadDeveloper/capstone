import "./App.css";
import Footer from "./Footer";
import React from "react";
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <div className="form-container">
        <form className="form">
          <Search />
        </form>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
