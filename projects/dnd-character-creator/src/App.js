import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home.js'
import EntryForm from './components/EntryForm.js'
import Character from './components/Character.js'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/entryform"> Get Started </Link>
        <Link to="/characterlist"> Your Character </Link>
      </nav>
      
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/entryform" element={<EntryForm />}/>
        <Route path = "/characterlist" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
