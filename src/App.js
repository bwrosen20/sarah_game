import SarahFace from './components/SarahFace'
import Store from './components/Store'
import './App.css';
import React, {useState} from 'react'


export const ClicksContext = React.createContext()

function App() {

  const [clicks, setClicks]=useState(0)
  const [clickValue, setClickValue]=useState(1)

  function clickOnFace(){
    setClicks(clicks+clickValue)
  }

  return (
    <div className="App">
        <header>
        {/* <img src={logo} className="app-logo" alt="logo" /> */}
        {/* <marquee behavior="alternate" scrollamount="30">
          <marquee behavior="alternate" scrollamount="30" direction="down">Hi</marquee>
        </marquee> */}
        </header>

        <ClicksContext.Provider value={clicks}>
          <div className="mainGame">
          <div className="sarahClicker">
          <h2 className="userTitle">Sarah Smiler</h2>
            <div className="sarahCounter">
              <h1>{clicks} Smiles</h1>
              <h3>per second: TBD</h3>
            </div>
              <SarahFace clickOnFace={clickOnFace} />
            </div>
            <div className="automatedClicks">
              <h1>automated clicks</h1>
            </div>
            <div className="store">
              <Store />
            </div>
          </div>
        </ClicksContext.Provider>
    </div>
  );
}

export default App;
