import SarahFace from './components/SarahFace'
import Store from './components/Store'
import './App.css';
import React, {useState, useEffect} from 'react'


export const ClicksContext = React.createContext()

function App() {

  const [clicks, setClicks]=useState(0)
  const [clickValue, setClickValue]=useState(1)
  const [autoClicks, setAutoClicks]=useState(0)
  const [clickStarter,setClickStarter]=useState(false)
  // const [mainStoreItems, setMainStoreItems]=useState([])
  const [mainStoreItems,setMainStoreItems] = useState([
  {"index":0,"item":"Cursor", "price":15, "clicks":0.1}, 
  {"index":1,"item":"Diet Coke", "price":100, "clicks":1},
  {"index":2,"item":"Mid 2000's Pop Song", "price":1100, "clicks":8},
  {"index":3,"item":"Meat Substitute", "price":12000, "clicks":47},
  {"index":4,"item":"True Crime Video","price":130000, "clicks":260},
  {"index":5,"item":"Family/Friend", "price":1400000, "clicks":1400},
  {"index":6,"item":"Nature", "price":20000000, "clicks":7800},
  {"index":7,"item":"Anime", "price":330000000, "clicks":44000},
  {"index":8,"item":"Wine", "price":5100000000, "clicks":260000},
  {"index":9,"item":"Very Specific Movie", "price":75000000000, "clicks":1600000},
  {"index":10,"item":"Special Place", "price":1000000000000, "clicks":10000000},
  {"index":11,"item":"Video Game", "price":14000000000000, "clicks":65000000},
  {"index":12,"item":"Boutique", "price":170000000000000, "clicks":430000000},
  {"index":13,"item":"Brian", "price":2100000000000000, "clicks":2900000000}])
  
  // const [mainStorePrices,setMainStorePrices]=useState[15,100,,12000,130000,1400000,20000000,330000000,5100000000,75000000000,1000000000000,14000000000000,170000000000000,2100000000000000]
  // const [mainStoreClicks,setMainStoreClicks]=useState[0.1,1,8,47,260,1400,7800,44000,260000,1600000,10000000,65000000,430000000,2900000000]
  useEffect(()=>{
    const autoClicker = setTimeout(()=>{
        setClicks(prev=>(prev+autoClicks))
        if (autoClicks > 0){
          setClickStarter(!clickStarter)
        }
    },1000)

  },[clickStarter])
  

  function clickOnFace(){
    setClicks(clicks+clickValue)
  }

  function buyMain(event){
  const mainObject = mainStoreItems.filter((itemName)=>(itemName["index"]===parseInt(event.target.getAttribute('value'))))[0]
  if (mainObject["price"] <= clicks){
    setAutoClicks(autoClicks+mainObject["clicks"])
    setClickStarter(!clickStarter)
    setClicks(clicks-mainObject["price"])
    setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===mainObject["index"] ? {...mainObject,price:mainObject["price"]*1.15}:item)))
  }
  
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
              <h1>{Math.floor(clicks)} Smiles</h1>
              <h3>per second: {Math.floor(autoClicks)}</h3>
            </div>
              <SarahFace clickOnFace={clickOnFace} />
            </div>
            <div className="automatedClicks">
              <h1>automated clicks</h1>
            </div>
            <div className="store">
              <Store mainStoreItems={mainStoreItems} buyMain={buyMain}/>
            </div>
          </div>
        </ClicksContext.Provider>
    </div>
  );
}

export default App;



// const [mainStoreArray,setMainStoreArray] = useState([
//   {index:0,item:"Cursor", price:15, clicks:0.1}, 
//   {index:1,item:"Diet Coke", price:100, clicks:1},
//   {"index":2,"item":"Mid 2000's Pop Song", "price":1100, "clicks":8},
//   {"index":3,"item":"Meat Substitute", "price":12000, "clicks":47},
//   {"index":4,"item":"True Crime Video","price":130000, "clicks":260},
//   {"index":5,"item":"Family/Friend", "price":1400000, "clicks":1400},
//   {"index":6,"item":"Nature", "price":20000000, "clicks":7800},
//   {"index":7,"item":"Anime", "price":330000000, "clicks":44000},
//   {"index":8,"item":"Wine", "price":5100000000, "clicks":260000},
//   {"index":9,"item":"Very Specific Movie", "price":75000000000, "clicks":1600000},
//   {"index":10,"item":"Special Place", "price":1000000000000, "clicks":10000000},
//   {"index":11,"item":"Video Game", "price":14000000000000, "clicks":65000000},
//   {"index":12,"item":"Boutique", "price":170000000000000, "clicks":430000000},
//   {"index":13,"item":"Brian", "price":2100000000000000, "clicks":2900000000}])