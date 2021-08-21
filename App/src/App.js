import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <div className='app-content'>
          <Home />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
