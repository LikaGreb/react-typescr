import React, { useState } from 'react';
import img1 from './components/images/1.jpg';
import img2 from './components/images/2.jpg';
import img3 from './components/images/3.jpg';
import img4 from './components/images/4.jpg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState<number>(0);
  const [pic, setPic] = useState<any>(img1);

  function counter():void {
    setCount(count + 1);
    console.log(count);

    switch (count % 4) {
      case (0): setPic(img2);
        break;
      case (1): setPic(img3);
        break;
      case (2): setPic(img4);
        break;
      case (3): setPic(img1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="App-logo" alt="logo" />
        <p>
          <Button className="btn" variant="info" onClick={counter}>Next</Button>
        </p>

      </header>
    </div>
  );
}

export default App;
