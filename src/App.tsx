import React from "react";
import "./App.css";
import { HomeScreen } from "./pages/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoodPracticeForm } from "./pages/GoodPracticeForm";
import { CloseCallForm } from "./pages/CloseCallForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/good_practice" element={<GoodPracticeForm />} />
          <Route path="/close_call" element={<CloseCallForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
