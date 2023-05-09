import { useState } from 'react';
import './App.css';
import Color from './components/Color';
import Options from './components/Options';

function App() {
  const [color1, setColor1] = useState("rgba(225,225,225,1)")
  const [color2, setColor2] =useState("rgba(0,0,0,1)")
  const [angle, setAngle] = useState({target: {value: 180}})
  
  var colorIMG = document.getElementById("colorImg")

  const button = () => {
    colorIMG.style.backgroundImage=`linear-gradient(${angle.target.value}deg, ${color1.rgba}, ${color2.rgba})`
  }
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className='inputs'>
          <Color color1={color1.rgba} color2={color2.rgba} angle={angle}/>
          <Options color1={color1} setColor1={setColor1} color2={color2} setColor2={setColor2} angle={angle} setAngle={setAngle}/>
          <button onClick={button}>See Your Gradient</button>
        </div>
    </div>
  );
}

export default App;
