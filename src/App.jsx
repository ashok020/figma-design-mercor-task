import React from "react";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
