import SarahFace from './components/SarahFace'
import Store from './components/Store'
import AutomatedClicks from './components/AutomatedClicks'
import './App.css';
import React, {useState, useEffect} from 'react'
import cursor from "./mainStorePictures/cursor.png"
import dietCoke from './mainStorePictures/dietCoke.png'
import musicNote from './mainStorePictures/musicNote.png'
import beyondMeat from './mainStorePictures/beyondMeat.png'
import trueCrime from './mainStorePictures/trueCrime.png'
import family from './mainStorePictures/family.png'
import anime from './mainStorePictures/anime.png'
import nature from './mainStorePictures/nature.png'
import wine from './mainStorePictures/wine.png'
import movie from './mainStorePictures/movie.png'
import house from './mainStorePictures/house.png'
import videoGame from './mainStorePictures/videoGame.png'
import boutique from './mainStorePictures/boutique.png'
import brian from './mainStorePictures/brian.png'


export const StoreItemsContext = React.createContext()

function App() {

  const [clicks, setClicks]=useState(0)
  const [clickValue, setClickValue]=useState(1)
  const [autoClicks, setAutoClicks]=useState(0)
  const [clickStarter,setClickStarter]=useState(false)
  const [soFar,setSoFar]=useState([
    {"index":0,"soFar":0},
    {"index":1,"soFar":0},
    {"index":2,"soFar":0},
    {"index":3,"soFar":0},
    {"index":4,"soFar":0},
    {"index":5,"soFar":0},
    {"index":6,"soFar":0},
    {"index":7,"soFar":0},
    {"index":8,"soFar":0},
    {"index":9,"soFar":0},
    {"index":10,"soFar":0},
    {"index":11,"soFar":0},
    {"index":12,"soFar":0},
    {"index":13,"soFar":0}
  ])
  // const [mainStoreItems, setMainStoreItems]=useState([])
  const [mainStoreItems,setMainStoreItems] = useState([
  {"index":0,"item":"Cursor", "price":15, "clicks":0.1, "amount":0, "picture":cursor, "visible":1,"soFar":0}, 
  {"index":1,"item":"Diet Coke", "price":100, "clicks":1, "amount":0, "picture":dietCoke, "visible":1},
  {"index":2,"item":"Mid 2000's Pop Song", "price":1100, "clicks":8, "amount":0, "picture":musicNote, "visible":0},
  {"index":3,"item":"Meat Substitute", "price":12000, "clicks":47, "amount":0, "picture":beyondMeat, "visible":0},
  {"index":4,"item":"True Crime Video","price":130000, "clicks":260, "amount":0, "picture":trueCrime, "visible":0},
  {"index":5,"item":"Family/Friend", "price":1400000, "clicks":1400, "amount":0, "picture":family, "visible":0},
  {"index":6,"item":"Nature", "price":20000000, "clicks":7800, "amount":0, "picture":anime, "visible":0},
  {"index":7,"item":"Anime", "price":330000000, "clicks":44000, "amount":0, "picture":nature, "visible":0},
  {"index":8,"item":"Wine", "price":5100000000, "clicks":260000, "amount":0, "picture":wine, "visible":0},
  {"index":9,"item":"Very Specific Movie", "price":75000000000, "clicks":1600000, "amount":0, "picture":movie, "visible":0},
  {"index":10,"item":"Special Place", "price":1000000000000, "clicks":10000000, "amount":0, "picture":house, "visible":0},
  {"index":11,"item":"Video Game", "price":14000000000000, "clicks":65000000, "amount":0, "picture":videoGame, "visible":0},
  {"index":12,"item":"Boutique", "price":170000000000000, "clicks":430000000, "amount":0, "picture":boutique, "visible":0},
  {"index":13,"item":"Brian", "price":2100000000000000, "clicks":2900000000, "amount":0, "picture":brian, "visible":0}])
  
  // const [mainStorePrices,setMainStorePrices]=useState[15,100,,12000,130000,1400000,20000000,330000000,5100000000,75000000000,1000000000000,14000000000000,170000000000000,2100000000000000]
  // const [mainStoreClicks,setMainStoreClicks]=useState[0.1,1,8,47,260,1400,7800,44000,260000,1600000,10000000,65000000,430000000,2900000000]
  useEffect(()=>{
    const autoClicker = setTimeout(()=>{
        setClicks(prev=>(prev+autoClicks))
        if (autoClicks > 0){
          setSoFar(soFar.map((item)=>({...item,soFar:item["soFar"]+(mainStoreItems[parseFloat(item["index"])]["clicks"]*mainStoreItems[parseFloat(item["index"])]["amount"])})))
        }
    },1000)

  },[clickStarter,soFar])

if (mainStoreItems[0]["visible"]<2 && clicks >= 15){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===0 ? {...item,visible:2} : item["index"]===2 ? {...item,visible:1} : item)))
  console.log("it happened")
}
if (mainStoreItems[1]["visible"]<2 && clicks >= 100){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===1 ? {...item,visible:2} : item["index"]===3 ? {...item,visible:1} : item)))
}
if (mainStoreItems[2]["visible"]<2 && clicks >= 1100){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===2 ? {...item,visible:2} : item["index"]===4 ? {...item,visible:1} : item)))
}
if (mainStoreItems[3]["visible"]<2 && clicks >= 12000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===3 ? {...item,visible:2} : item["index"]===5 ? {...item,visible:1} : item)))
}
if (mainStoreItems[4]["visible"]<2 && clicks >= 130000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===4 ? {...item,visible:2} : item["index"]===6 ? {...item,visible:1} : item)))
}
if (mainStoreItems[5]["visible"]<2 && clicks >= 1400000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===5 ? {...item,visible:2} : item["index"]===7 ? {...item,visible:1} : item)))
}
if (mainStoreItems[6]["visible"]<2 && clicks >= 20000000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===6 ? {...item,visible:2} : item["index"]===8 ? {...item,visible:1} : item)))
}
if (mainStoreItems[7]["visible"]<2 && clicks >= 330000000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===7 ? {...item,visible:2} : item["index"]===9 ? {...item,visible:1} : item)))
}
if (mainStoreItems[8]["visible"]<2 && clicks >= 5100000000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===8 ? {...item,visible:2} : item["index"]===10 ? {...item,visible:1} : item)))
}
if (mainStoreItems[9]["visible"]<2 && clicks >= 75000000000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===9 ? {...item,visible:2} : item["index"]===11 ? {...item,visible:1} : item)))
}
if (mainStoreItems[10]["visible"]<2 && clicks >= 1000000000000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===10 ? {...item,visible:2} : item["index"]===12 ? {...item,visible:1} : item)))
}
if (mainStoreItems[11]["visible"]<2 && clicks >= 14000000000000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===11 ? {...item,visible:2} : item["index"]===13 ? {...item,visible:1} : item)))
}
if (mainStoreItems[12]["visible"]<2 && clicks >= 170000000000000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===12 ? {...item,visible:2} : item)))
}
if (mainStoreItems[13]["visible"]<2 && clicks >= 2100000000000000){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===13 ? {...item,visible:2} : item)))
}



const clicksArray = Math.ceil(clicks).toString().split('')
let clicksString = "Hi"

if (clicks < 1000){
    clicksString = clicks < 100  && clicks%1!==0 ?  clicks.toFixed(1) :  Math.floor(clicks).toString()
}
else if (1000 <= clicks && clicks <1000000){
    let firstPart = clicksArray.slice(0,clicksArray.length-3).join().replace(',','').replace(',','')
    let secondPart = clicksArray.slice(-3).join().replace(',','').replace(',','')
    clicksString = `${firstPart},${secondPart}`
}
else if (1000000 <= clicks && clicks <1000000000){
    let firstPart = clicksArray.slice(0,clicksArray.length-6).join().replace(',','').replace(',','')
    let secondPart = clicksArray.slice(-6,4).join().replace(',','').replace(',','')
    if (secondPart.length>0){
        clicksString = `${firstPart}.${secondPart} Million`
    }
    else{
        clicksString = `${firstPart} Million`
    }

    
}
else if (1000000000 <= clicks && clicks <1000000000000){
    let firstPart = clicksArray.slice(0,clicksArray.length-9).join().replace(',','').replace(',','')
    let secondPart = clicksArray.slice(-9,4).join().replace(',','').replace(',','')
    if (secondPart.length>0){
        clicksString = `${firstPart}.${secondPart} Billion`
    }
    else{
        clicksString = `${firstPart} Billion`
    }

    
}
else if (1000000000000 <= clicks && clicks <1000000000000000){
    let firstPart = clicksArray.slice(0,clicksArray.length-12).join().replace(',','').replace(',','')
    let secondPart = clicksArray.slice(-12,4).join().replace(',','').replace(',','')
    if (secondPart.length>0){
        clicksString = `${firstPart}.${secondPart} Trillion`
    }
    else{
        clicksString = `${firstPart} Trillion`
    }

    
}
else if (1000000000000000 <= clicks && clicks <1000000000000000000n){
    let firstPart = clicksArray.slice(0,clicksArray.length-15).join().replace(',','').replace(',','')
    let secondPart = clicksArray.slice(-15,4).join().replace(',','').replace(',','')
    if (secondPart.length>0){
        clicksString = `${firstPart}.${secondPart} Quadrillion`
    }
    else{
        clicksString = `${firstPart} Quadrillion`
    }

    
}
else if (1000000000000000000n <= clicks && clicks <1000000000000000000000n){
    let firstPart = clicksArray.slice(0,clicksArray.length-18).join().replace(',','').replace(',','')
    let secondPart = clicksArray.slice(-18,4).join().replace(',','').replace(',','')
    if (secondPart.length>0){
        clicksString = `${firstPart}.${secondPart} Quintillion`
    }
    else{
        clicksString = `${firstPart} Quintillion`
    }

    
}
else if (1000000000000000000000n <= clicks && clicks <1000000000000000000000000n){
    let firstPart = clicksArray.slice(0,clicksArray.length-21).join().replace(',','').replace(',','')
    let secondPart = clicksArray.slice(-21,4).join().replace(',','').replace(',','')
    if (secondPart.length>0){
        clicksString = `${firstPart}.${secondPart} Sextillion`
    }
    else{
        clicksString = `${firstPart} Sextillion`
    }

    
}
else if (1000000000000000000000000n <= clicks && clicks <1000000000000000000000000000n){
    let firstPart = clicksArray.slice(0,clicksArray.length-24).join().replace(',','').replace(',','')
    let secondPart = clicksArray.slice(-24,4).join().replace(',','').replace(',','')
    if (secondPart.length>0){
        clicksString = `${firstPart}.${secondPart} Septillion`
    }
    else{
        clicksString = `${firstPart} Septillion`
    }

}
else{
    clicksString = "Too Many"
}

  function clickOnFace(){
    setClicks(clicks+clickValue)
  }

  function buyMain(event){
  const mainObject = mainStoreItems.filter((itemName)=>(itemName["index"]===parseInt(event.target.getAttribute('value'))))[0]
  if (mainObject["price"] <= clicks){
    setAutoClicks(autoClicks+mainObject["clicks"])
    setClickStarter(!clickStarter)
    setClicks(clicks-mainObject["price"])
    setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===mainObject["index"] ? {...mainObject,price:Math.ceil(mainObject["price"]*1.15),amount:mainObject["amount"]+1}:item)))
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

        <StoreItemsContext.Provider value={mainStoreItems}>
          <div className="mainGame">
          <div className="sarahClicker">
          <h2 className="userTitle">Sarah Smiler</h2>
            <div className="sarahCounter">
              <h1 className="smilesCounter">{clicksString} Smiles</h1>
              <h3 className="perSecond">per second: {autoClicks < 100 && autoClicks!==0 ? autoClicks.toFixed(1):Math.floor(autoClicks)}</h3>
            </div>
              <SarahFace clickOnFace={clickOnFace} />
            </div>
            <div className="automatedClicks">
              <AutomatedClicks/>
            </div>
            <div className="store">
              <Store buyMain={buyMain}/>
            </div>
          </div>
        </StoreItemsContext.Provider>
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