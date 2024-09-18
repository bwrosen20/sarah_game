import SarahFace from './components/SarahFace'
import Store from './components/Store'
import AutomatedClicks from './components/AutomatedClicks'
import UpgradeStore from './components/UpgradeStore'
import './App.css';
import React, {useState, useEffect} from 'react'
import numberify from './numberify'
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

  const [thousandFingersCount, setThousandFingersCount]=useState({"amount":0,"active":false,"addition":0})
  const [clicks, setClicks]=useState(0)
  const [clickValue, setClickValue]=useState(1)
  const [autoClicks, setAutoClicks]=useState(0)
  const [clickStarter,setClickStarter]=useState(false)
  const [soFar,setSoFar]=useState([
    {"index":0,"soFar":0,"realValue":0},
    {"index":1,"soFar":0,"realValue":0},
    {"index":2,"soFar":0,"realValue":0},
    {"index":3,"soFar":0,"realValue":0},
    {"index":4,"soFar":0,"realValue":0},
    {"index":5,"soFar":0,"realValue":0},
    {"index":6,"soFar":0,"realValue":0},
    {"index":7,"soFar":0,"realValue":0},
    {"index":8,"soFar":0,"realValue":0},
    {"index":9,"soFar":0,"realValue":0},
    {"index":10,"soFar":0,"realValue":0},
    {"index":11,"soFar":0,"realValue":0},
    {"index":12,"soFar":0,"realValue":0},
    {"index":13,"soFar":0,"realValue":0}
  ])
  // const [mainStoreItems, setMainStoreItems]=useState([])
  const [mainStoreItems,setMainStoreItems] = useState([
  {"index":0,"item":"Cursor", "price":15, "clicks":0.1, "amount":0, "picture":cursor, "visible":1,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]}, 
  {"index":1,"item":"Diet Coke", "price":100, "clicks":1, "amount":0, "picture":dietCoke, "visible":1,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":2,"item":"Mid 2000's Pop Song", "price":1100, "clicks":8, "amount":0, "picture":musicNote, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":3,"item":"Meat Substitute", "price":12000, "clicks":47, "amount":0, "picture":beyondMeat, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":4,"item":"True Crime Video","price":130000, "clicks":260, "amount":0, "picture":trueCrime, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":5,"item":"Family/Friend", "price":1400000, "clicks":1400, "amount":0, "picture":family, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":6,"item":"Nature", "price":20000000, "clicks":7800, "amount":0, "picture":anime, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":7,"item":"Anime", "price":330000000, "clicks":44000, "amount":0, "picture":nature, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":8,"item":"Wine", "price":5100000000, "clicks":260000, "amount":0, "picture":wine, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":9,"item":"Very Specific Movie", "price":75000000000, "clicks":1600000, "amount":0, "picture":movie, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":10,"item":"Special Place", "price":1000000000000, "clicks":10000000, "amount":0, "picture":house, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":11,"item":"Video Game", "price":14000000000000, "clicks":65000000, "amount":0, "picture":videoGame, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":12,"item":"Boutique", "price":170000000000000, "clicks":430000000, "amount":0, "picture":boutique, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {"index":13,"item":"Brian", "price":2100000000000000, "clicks":2900000000, "amount":0, "picture":brian, "visible":0,"extra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]}])


  //14 is none

  //visibility
  //0: not there yet
  //1: there but not buyable
  //2: buyable
  //3: done

  //additions: 
  //1 is multiply clicks by 2
  //2 is thousand fingers related
  //3 is twice as efficient and +1% sps to item 2 per item 1 (diet coke)
  //4 +5% sps on item 1 for each item 2 and +0.1% on item 2 for each item 1


//index 7 is actually 40
//index 8 is actually 128

  const [upgrades,setUpgrades] = useState([
    {"index":0,"item":0,"unlock":1,"price":100,"wordPrice":100,"name":"Reinforced Index Finger","description":"Mouse and Cursor are twice as efficient","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1,"multiply":0},
    {"index":1,"item":0,"unlock":1,"price":500,"wordPrice":500,"name":"Carpal Tunnel Prevention Cream","description":"Mouse and Cursor are twice as efficient","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1,"multiply":0},
    {"index":2,"item":0,"unlock":10,"price":10000,"wordPrice":"10 Thousand","name":"Ambidextrous","description":"Mouse and Cursor are twice as efficient","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1,"multiply":0},
    {"index":3,"item":0,"unlock":25,"price":100000,"wordPrice":"100 Thousand","name":"Thousand Fingers","description":"Mouse and Cursors gain +0.1 Smiles for each non-cursor object owned","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2,"multiply":0},
    {"index":4,"item":0,"unlock":50,"price":10000000,"wordPrice":"10 Million","name":"Million Fingers","description":"Multiplies gain from thousand fingers by 5","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2,"multiply":0},
    {"index":5,"item":0,"unlock":100,"price":100000000,"wordPrice":"100 Million","name":"Billion Fingers","description":"Multiplies gain from thousand fingers by 10","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2,"multiply":0},
    {"index":6,"item":0,"unlock":150,"price":1000000000,"wordPrice":"1 Billion","name":"Trillion Fingers","description":"Multiplies gain from thousand fingers by 20","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2,"multiply":0},
    {"index":7,"item":1,"unlock":1,"price":55000,"wordPrice":"55,000","name":"Pusha T Album","description":"Diet Coke is twice as efficient. Pop Songs gain +1% sps per Diet Coke","picture":cursor,"visible":0,"secondItem":2,"unlockTwo":15,"addition":3,"multiply":1},
    {"index":8,"item":2,"unlock":15,"price":2800000000000000000n,"wordPrice":"2.8 Quintillion","name":"Gustavo Santaolalla Does It Again","description":"Pop songs gain +5% sps per video game. Video games gain +0.1% sps per pop song","picture":cursor,"visible":0,"secondItem":11,"unlockTwo":15,"addition":4,"multiply":0}
  ])
  
  // const [mainStorePrices,setMainStorePrices]=useState[15,100,,12000,130000,1400000,20000000,330000000,5100000000,75000000000,1000000000000,14000000000000,170000000000000,2100000000000000]
  // const [mainStoreClicks,setMainStoreClicks]=useState[0.1,1,8,47,260,1400,7800,44000,260000,1600000,10000000,65000000,430000000,2900000000]


  //extra will have the value multiplied by the amount of the other item
  //if pop song has 0.1 extra in slot 2([1] in array jargon) then it will multiply mainStoreItems[1]["amount"] by 0.1 and add it to the autoclicks
  //will also need to adjust soFar array

  useEffect(()=>{
    const autoClicker = setTimeout(()=>{
        //set real autoclick amount for each store item (total including all the additions from upgrades)
        //add the real value to soFar
        //send real value down to store to show user
        //map through mainStoreItems where it finds the real values and make an array of them
        
        setClicks(prev=>(prev+autoClicks+(thousandFingersCount["addition"]*thousandFingersCount["amount"])))
        if (autoClicks > 0){
          setSoFar(soFar.map((item)=>({...item,soFar:item["soFar"]+(mainStoreItems[parseFloat(item["index"])]["clicks"]*mainStoreItems[parseFloat(item["index"])]["amount"])})))
          setClickStarter(!clickStarter)
        }
    },1000)

  },[clickStarter])

if (mainStoreItems[0]["visible"]<2 && clicks >= 15){
  setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===0 ? {...item,visible:2} : item["index"]===2 ? {...item,visible:1} : item)))
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

//if there aren't enough of the first object then nothing
//if there aren't enough of the second object then nothing 
//if there's enough of both but not enough clicks to afford then visibility to 1
//if there's enough of both and enough clicks then visibility to 2


upgrades.forEach((thing)=>{
  const itemOne = mainStoreItems[thing["item"]]
  const itemTwo = thing["secondItem"]===14 ? 14 : mainStoreItems[thing["secondItem"]]
  if (((thing["visible"]===2) && (thing["price"] < clicks)) || (thing["visible"]===3) || (thousandFingersCount["active"]===false && thing["addition"]===2 && thing["index"]!==3)){
    return thing
  }
  else if (thing["visible"===2]){
    setUpgrades(upgrades.map((grade)=>{
      if (grade["index"]===thing["index"])
      {
        return({...grade,visible:1})
      }
      else{
        return grade
      }}))
  }
  else if (thing["visible"]===1){
    if (clicks >= thing["price"]){
      setUpgrades(upgrades.map((grade)=>{
        if (grade["index"]===thing["index"])
        {
          return({...grade,visible:2})
        }
        else{
          return grade
        }}))
    }
  }

  else {
    if (itemOne["amount"] < thing["unlock"]){
      return thing
    }
    else {
      //if there is an item two
      if (itemTwo!==14){
        //if item two has not yet surpassed the unlock threshold
        if (itemTwo["amount"] < thing["unlockTwo"]){
          return thing
        }
        //if both items have surpassed the unlock threshold let's unlock it
        else{
          setUpgrades(upgrades.map((grade)=>{
            if (grade["index"]===thing["index"])
            {
              return({...grade,visible:1})
            }
            else{
              return grade
            }}))
        }
      }
      //if there is no item two let's unlock it
      else{
        setUpgrades(upgrades.map((grade)=>{
          if (grade["index"]===thing["index"])
          {
            return({...grade,visible:1})
          }
          else{
            return grade
          }}))
      }
    }
}
})






  function clickOnFace(){
    setClicks(clicks+clickValue+(thousandFingersCount["addition"]*thousandFingersCount["amount"]))
  }

  //problem: i need every time a diet coke is added, to change sps of others. Starting with pop songs
  //diet cokes are added on buy main function

  function buyMain(event){
  const mainObject = mainStoreItems.filter((itemName)=>(itemName["index"]===parseInt(event.target.getAttribute('value'))))[0]
  if (mainObject["price"] <= clicks){
    if (autoClicks===0){
      setClickStarter(!clickStarter)
    }
      let realAutoClickTotal = 0
      mainStoreItems.forEach((mainItem)=>{
        let currentAutoClickValue = 0
        for (let i=0; i<14; i++){
          currentAutoClickValue = currentAutoClickValue + (mainItem["extra"][i]*mainStoreItems[i]["amount"]*mainItem["amount"]*mainItem["clicks"]/100)
        }
        realAutoClickTotal = realAutoClickTotal + currentAutoClickValue + (mainItem["amount"]*mainItem["clicks"])
      })
    setAutoClicks(realAutoClickTotal+mainObject["clicks"])
    setClicks(clicks-mainObject["price"])
    setMainStoreItems(mainStoreItems.map((item)=>(item["index"]===mainObject["index"] ? {...mainObject,price:Math.ceil(mainObject["price"]*1.15),amount:mainObject["amount"]+1}:item)))}
    if(parseInt(event.target.getAttribute('value'))!==0){
      setThousandFingersCount({...thousandFingersCount,amount:thousandFingersCount["amount"]+1})
    }
  }

  //additions: 
  //1 is multiply clicks by 2
  //2 is thousand fingers related
  //3 is twice as efficient and +1% sps to item 2 per item 1 (diet coke)
  //4 +5% sps on item 1 for each item 2 and +0.1% on item 2 for each item 1

  //make a thousand fingers counter that counts non cursor items

  function getUpgrade(event){
    const itemID = event.target.getAttribute('value')
    const item = upgrades[itemID]
    const itemAddition = item["addition"]
    if (upgrades[itemID]["price"] <= clicks){
      //upgrades.forEach((grade)=>(grade["index"]===itemID?console.log(grade["index"]):console.log("nope")))
      setUpgrades(upgrades.map((grade)=>(grade["index"]==itemID?{...grade,visible:3}:grade)))
      if (item["secondItem"]===14){
        if (itemAddition===1){
          if (item["item"]===0){
            setClickValue(clickValue*2)
          }
          // setMainStoreItems(mainStoreItems.map((mainItem)=>(mainItem["index"]===item["item"]?{...mainItem,clicks:mainItem["clicks"]*2}:mainItem)))
          // let autoClickNumber = 0
          // mainStoreItems.forEach((thing)=>(thing["index"]===item["item"]?autoClickNumber = autoClickNumber + (thing["amount"]*thing["clicks"]*2):autoClickNumber = autoClickNumber + (thing["amount"]*thing["clicks"])))
          
          // setAutoClicks(autoClickNumber)
          const theMainItem = mainStoreItems[item["item"]]
          let realAutoClickTotal = 0
          let newMainStoreItems=mainStoreItems.map((mainItem)=>{
            let currentAutoClickValue = 0
            if (mainItem["index"]===theMainItem["index"]){
              mainItem["clicks"]=mainItem["clicks"]*2
            }
            for (let i=0; i<14; i++){
              currentAutoClickValue = currentAutoClickValue + (mainItem["extra"][i]*mainStoreItems[i]["amount"]*mainItem["amount"]*mainItem["clicks"]/100)
              
            }
            console.log(currentAutoClickValue)
            realAutoClickTotal = realAutoClickTotal + currentAutoClickValue + (mainItem["amount"]*mainItem["clicks"])
            return mainItem
            
          })
  
          console.log(newMainStoreItems)
          setAutoClicks(realAutoClickTotal)
          setMainStoreItems(newMainStoreItems)


        }
        else if (itemAddition===2){
          if (item["name"]==="Thousand Fingers"){
            setThousandFingersCount({...thousandFingersCount,active:true,addition:0.1})

            //3: thousand fingers +.1
            //4" million fingers *5
            //5: billion fingers *10
            //6: trillion fingers *20
            //the rest are by 20
          }
          else if (item["index"]===4){
            setThousandFingersCount({...thousandFingersCount,amount:thousandFingersCount["amount"]*5})
          }
          else if (item["index"]===5){
            setThousandFingersCount({...thousandFingersCount,amount:thousandFingersCount["amount"]*10})
          }
          else{
            setThousandFingersCount({...thousandFingersCount,amount:thousandFingersCount["amount"]*20})
          }
        }
        
      }
      else if (itemAddition==3){
        //need to run similar function as is in buyMain and multiply diet coke amount by 2
        //when setting mainStoreItems include extras alteration on secondary item
        //diet coke is main item
        const theMainItem = mainStoreItems[item["item"]]
        const secondMainItem = mainStoreItems[item["secondItem"]]
        let realAutoClickTotal = 0
        let newMainStoreItems=mainStoreItems.map((mainItem)=>{
          let currentAutoClickValue = 0
          if (secondMainItem["index"]===mainItem["index"]){
            mainItem["extra"][1]=mainItem["extra"][1]+item["multiply"]
          }
          else if (mainItem["index"]===theMainItem["index"]){
            mainItem["clicks"]=mainItem["clicks"]*2
          }
          for (let i=0; i<14; i++){
            currentAutoClickValue = currentAutoClickValue + (mainItem["extra"][i]*mainStoreItems[i]["amount"]*mainItem["amount"]*mainItem["clicks"]/100)
            
          }
          console.log(currentAutoClickValue)
          realAutoClickTotal = realAutoClickTotal + currentAutoClickValue + (mainItem["amount"]*mainItem["clicks"])
          return mainItem
          
        })

        console.log(newMainStoreItems)
        setAutoClicks(realAutoClickTotal)
        setMainStoreItems(newMainStoreItems)
      }
      else{
        //mainItem will be first gaining 5%
        //secondItem will be second gaining 0.1%
        const theMainItem = mainStoreItems[item["item"]]
        const secondMainItem = mainStoreItems[item["secondItem"]]
        let realAutoClickTotal = 0
        let newMainStoreItems=mainStoreItems.map((mainItem)=>{
          let currentAutoClickValue = 0
          if (secondMainItem["index"]===mainItem["index"]){
            mainItem["extra"][theMainItem["index"]]=.1
          }
          else if (mainItem["index"]===theMainItem["index"]){
            mainItem["extra"][secondMainItem["index"]]=5
          }
          for (let i=0; i<14; i++){
            currentAutoClickValue = currentAutoClickValue + (mainItem["extra"][i]*mainStoreItems[i]["amount"]*mainItem["amount"]*mainItem["clicks"]/100)
            
          }
          console.log(currentAutoClickValue)
          realAutoClickTotal = realAutoClickTotal + currentAutoClickValue + (mainItem["amount"]*mainItem["clicks"])
          return mainItem
          
        })

        console.log(newMainStoreItems)
        setAutoClicks(realAutoClickTotal)
        setMainStoreItems(newMainStoreItems)
      }
      }
  }


  const clicksString=numberify(clicks)
  const perSecondString=numberify(autoClicks+(thousandFingersCount["addition"]*thousandFingersCount["amount"]))
  const mouseString=numberify(clickValue)


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
              <h3 className="perSecond">Per Second: {perSecondString}</h3>
              <h3 className="perSecond">Clicks Gain {mouseString} Smiles</h3>
            </div>
              <SarahFace clickOnFace={clickOnFace} />
            </div>
            <div className="automatedClicks">
              <AutomatedClicks/>
            </div>
            <div className="store">
              <h1 className="storeTitle">Store</h1>
              <UpgradeStore getUpgrade={getUpgrade} upgrades={upgrades}/>
              <Store soFar={soFar} buyMain={buyMain} mainClicks={clicks}/>
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