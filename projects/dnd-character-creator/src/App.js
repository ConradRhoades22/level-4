import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home.js'
import EntryForm from './components/EntryForm.js'
import Character from './components/Character.js'

function App() {
  const [characterList, setCharacterList] = useState([])
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/entryform"> Build Your Character </Link>
        <Link to="/character"> Your Character </Link>
      </nav>
      
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/entryform" element={<EntryForm characterList={characterList} setCharacterList={setCharacterList}/>}/>
        <Route path = "/character" element={<Character characterList={characterList} setCharacterList={setCharacterList}/>} />
      </Routes>
    </Router>
  );
}

export default App;
