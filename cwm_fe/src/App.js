import { BrowserRouter, Routes, Route } from "react-router-dom";
import clasese from "./App.module.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={clasese.background}>
      <Header />
    </div>
  );
}

export default App;
