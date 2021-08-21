import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <div className='App-content'>
          <h1>Kickstarter-1</h1>
          <p>Build-Week </p>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
