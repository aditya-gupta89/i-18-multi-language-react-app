import logo from "./logo.svg";
import { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
