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
  const [clicks, setClicks]=useState(1013420)
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
    {"index":0,"item":0,"unlock":1,"price":100,"wordPrice":100,"name":"Reinforced Index Finger","description":"Mouse and Cursor are twice as efficient","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":1,"item":0,"unlock":1,"price":500,"wordPrice":500,"name":"Carpal Tunnel Prevention Cream","description":"Mouse and Cursor are twice as efficient","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":2,"item":0,"unlock":10,"price":10000,"wordPrice":"10 Thousand","name":"Ambidextrous","description":"Mouse and Cursor are twice as efficient","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":3,"item":0,"unlock":25,"price":100000,"wordPrice":"100 Thousand","name":"Thousand Fingers","description":"Mouse and Cursors gain +0.1 Smiles for each non-cursor object owned","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2},
    {"index":4,"item":0,"unlock":50,"price":10000000,"wordPrice":"10 Million","name":"Million Fingers","description":"Multiplies gain from thousand fingers by 5","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2},
    {"index":5,"item":0,"unlock":100,"price":100000000,"wordPrice":"100 Million","name":"Billion Fingers","description":"Multiplies gain from thousand fingers by 10","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2},
    {"index":6,"item":0,"unlock":150,"price":1000000000,"wordPrice":"1 Billion","name":"Trillion Fingers","description":"Multiplies gain from thousand fingers by 20","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2},
    {"index":7,"item":1,"unlock":1,"price":1000,"wordPrice":"1 Thousand","name":"Two For One Bottles","description":"Diet Coke is twice as efficient","picture":dietCoke,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":8,"item":1,"unlock":5,"price":5000,"wordPrice":"5 Thousand","name":"Factory Tour","description":"Diet Coke is twice as efficient","picture":dietCoke,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":9,"item":1,"unlock":25,"price":50000,"wordPrice":"50 Thousand","name":"Caffeine Free! Sarah Can Drink At Night","description":"Diet Coke is twice as efficient","picture":dietCoke,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":10,"item":2,"unlock":1,"price":11000,"wordPrice":"11 Thousand","name":"Drops Of Jupiter By Train","description":"Pop Songs are twice as efficient","picture":musicNote,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":11,"item":2,"unlock":5,"price":55000,"wordPrice":"55 Thousand","name":"The She's The Man Soundtrack","description":"Pop Songs are twice as efficient","picture":musicNote,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":12,"item":2,"unlock":25,"price":550000,"wordPrice":"550 Thousand","name":"You Request Bottom's Up And They Play It","description":"Pop Songs are twice as efficient","picture":musicNote,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":13,"item":4,"unlock":1,"price":1300000,"wordPrice":"1.3 Million","name":"There's Been A Murder","description":"True Crime is twice as efficient","picture":trueCrime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":14,"item":4,"unlock":5,"price":6500000,"wordPrice":"6.5 Million","name":"The Black Dalia's Been Caught","description":"True Crime is twice as efficient","picture":trueCrime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":15,"item":4,"unlock":25,"price":65000000,"wordPrice":"6.5 Million","name":"Double Murder","description":"True Crime is twice as efficient","picture":trueCrime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":16,"item":3,"unlock":1,"price":120000,"wordPrice":"120 Thousand","name":"Vegan Sausage For Breakfast","description":"Meat Subs are twice as efficient","picture":beyondMeat,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":17,"item":3,"unlock":5,"price":600000,"wordPrice":"600 Thousand","name":"Impossible Whopper","description":"Meat Subs are twice as efficient","picture":beyondMeat,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":18,"item":3,"unlock":25,"price":6000000,"wordPrice":"6 Million","name":"Salmon From Anixi","description":"Meat Subs are twice as efficient","picture":beyondMeat,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":19,"item":8,"unlock":1,"price":51000000000,"wordPrice":"51 Billion","name":"Port","description":"Wine is twice as efficient","picture":wine,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":20,"item":8,"unlock":5,"price":255000000000,"wordPrice":"255 Billion","name":"Chardonnay","description":"Wine is twice as efficient","picture":wine,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":21,"item":8,"unlock":25,"price":2550000000,"wordPrice":"2.55 Trillion","name":"Sauvignon Blanc","description":"Wine is twice as efficient","picture":wine,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":22,"item":9,"unlock":1,"price":750000000000,"wordPrice":"750 Billion","name":"Amanda Bynes Destroys The Fair","description":"Movies are twice as efficient","picture":movie,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":23,"item":9,"unlock":5,"price":3750000000000,"wordPrice":"3.75 Trillion","name":"Remember A Name By Saying It In A Deep Voice","description":"Movies are twice as efficient","picture":movie,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":24,"item":9,"unlock":25,"price":37500000000000,"wordPrice":"37.5 Trillion","name":"Away From The Things Of Man","description":"Movies are twice as efficient","picture":movie,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":25,"item":10,"unlock":1,"price":10000000000000,"wordPrice":"10 Trillion","name":"Riverside Park","description":"Special Places are twice as efficient","picture":house,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":26,"item":10,"unlock":5,"price":50000000000000,"wordPrice":"50 Trillion","name":"Blue Mountain Lake","description":"Special Places are twice as efficient","picture":house,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":27,"item":10,"unlock":25,"price":500000000000000,"wordPrice":"500 Trillion","name":"Abandoned Cement Factory","description":"Special Places are twice as efficient","picture":house,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":28,"item":11,"unlock":1,"price":140000000000000,"wordPrice":"140 Trillion","name":"Clicker Attack","description":"Video Games are twice as efficient","picture":videoGame,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":29,"item":11,"unlock":5,"price":700000000000000,"wordPrice":"700 Trillion","name":"Sora Takes Down Maleficent","description":"Video Games are twice as efficient","picture":videoGame,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":30,"item":11,"unlock":25,"price":7000000000000000,"wordPrice":"7 Quadrillion","name":"A Lesser Version Of This Game Involving Cookies","description":"Video Games are twice as efficient","picture":videoGame,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":31,"item":0,"unlock":200,"price":10000000000,"wordPrice":"10 Billion","name":"Quadrillion Fingers","description":"Multiplies gain from thousand fingers by 20","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2},
    {"index":32,"item":1,"unlock":50,"price":5000000,"wordPrice":"5 Million","name":"Recycling A Taco Bell Cup","description":"Diet Coke is twice as efficient","picture":dietCoke,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":33,"item":2,"unlock":50,"price":55000000,"wordPrice":"55 Million","name":"Watermelon Sugar Low","description":"Pop Songs are twice as efficient","picture":musicNote,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":34,"item":4,"unlock":50,"price":6500000000,"wordPrice":"6.5 Billion","name":"Who Dunnit?","description":"True Crime is twice as efficient","picture":trueCrime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":35,"item":3,"unlock":50,"price":600000000,"wordPrice":"600 Million","name":"We Find Out All Fish Are Ass Holes","description":"Meat Subs are twice as efficient","picture":beyondMeat,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":36,"item":8,"unlock":50,"price":255000000000000,"wordPrice":"255 Trillion","name":"Tipsy Skis","description":"Wine is twice as efficient","picture":wine,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":37,"item":9,"unlock":50,"price":3750000000000000,"wordPrice":"3.75 Quadrillion","name":"Solar Plexus, Instep, Nose, Groin","description":"Movies are twice as efficient","picture":movie,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":38,"item":10,"unlock":50,"price":50000000000000000n,"wordPrice":"50 Quadrillion","name":"The Fourth At The River","description":"Special Places are twice as efficient","picture":house,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":39,"item":11,"unlock":50,"price":700000000000000000n,"wordPrice":"700 Quadrillion","name":"Fragile Dreams Remake","description":"Video Games are twice as efficient","picture":videoGame,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":40,"item":1,"unlock":1,"price":55000,"wordPrice":"55 Thousand","name":"Pusha T Album","description":"Diet Coke is twice as efficient. Pop Songs gain +1% sps per Diet Coke","picture":dietCoke,"visible":0,"secondItem":2,"unlockTwo":15,"addition":3,"multiply":1},
    {"index":41,"item":1,"unlock":1,"price":600000,"wordPrice":"600 Thousand","name":"Lunch Time","description":"Diet Coke is twice as efficient. Meat Subs gain +1% sps per 2 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":3,"unlockTwo":15,"addition":3,"multiply":0.5},
    {"index":42,"item":1,"unlock":1,"price":6500000,"wordPrice":"6.5 Million","name":"Some Fava Beans And A Nice Chianti","description":"Diet Coke is twice as efficient. True Crime gains +1% sps per 3 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":3,"unlockTwo":15,"addition":3,"multiply":0.333},
    {"index":43,"item":1,"unlock":1,"price":255000000000,"wordPrice":"255 Billion","name":"Caffeine + Alcohol = A Good Time","description":"Diet Coke is twice as efficient. Wine gains +1% sps per 7 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":8,"unlockTwo":15,"addition":3,"multiply":0.14285714},
    {"index":44,"item":1,"unlock":1,"price":3750000000000,"wordPrice":"3.75 Trillion","name":"Poorly Disguised Ad","description":"Diet Coke is twice as efficient. Movies gain +1% sps per 8 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":9,"unlockTwo":15,"addition":3,"multiply":0.125},
    {"index":45,"item":1,"unlock":1,"price":50000000000000,"wordPrice":"50 Trillion","name":"Lunch At Honeywell","description":"Diet Coke is twice as efficient. Special Places gain +1% sps per 9 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":10,"unlockTwo":15,"addition":3,"multiply":0.11111111},
    {"index":46,"item":1,"unlock":1,"price":700000000000000,"wordPrice":"700 Trillion","name":"Mini Frige Stacked For Smash Tournament","description":"Diet Coke is twice as efficient. Video Games gain +1% sps per 10 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":11,"unlockTwo":15,"addition":3,"multiply":0.1},
    {"index":47,"item":0,"unlock":250,"price":10000000000000,"wordPrice":"10 Trillion","name":"Quintllion Fingers","description":"Multiplies gain from thousand fingers by 20","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2},
    {"index":48,"item":12,"unlock":1,"price":1700000000000000,"wordPrice":"1.7 Quadrillion","name":"White Shoes From Asos","description":"Boutiques are twice as efficient","picture":boutique,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":49,"item":12,"unlock":5,"price":8500000000000000,"wordPrice":"8.5 Quadrillion","name":"The Perfect Thrift Find","description":"Boutiques are twice as efficient","picture":boutique,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":50,"item":12,"unlock":25,"price":85000000000000000n,"wordPrice":"85 Quadrillion","name":"Colleen's Adds TV To Boyfriend Area. Can Stay For Hours Now","description":"Boutiques are twice as efficient","picture":boutique,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":51,"item":12,"unlock":50,"price":8500000000000000000n,"wordPrice":"8.5 Quintillion","name":"Sarah Buys 8 More Pairs Of Sunglasses","description":"Boutiques are twice as efficient","picture":boutique,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":52,"item":1,"unlock":1,"price":8500000000000000,"wordPrice":"8.5 Quadrillion","name":"Sarah Gets Caffeinated And Shops For 3 Hours","description":"Diet Coke is twice as efficient. Boutiques gain +1% sps per 11 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":12,"unlockTwo":15,"addition":3,"multiply":0.090909},
    {"index":53,"item":0,"unlock":300,"price":10000000000000000n,"wordPrice":"10 Quadrillion","name":"Sextillion Fingers","description":"Multiplies gain from thousand fingers by 20","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2},
    {"index":54,"item":1,"unlock":100,"price":500000000,"wordPrice":"500 Million","name":"World's Biggest Cup Of Diet Coke","description":"Diet Coke is twice as efficient","picture":dietCoke,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":55,"item":2,"unlock":100,"price":5500000000,"wordPrice":"5.5 Billion","name":"The DJ Plays Bottoms Up","description":"Pop Songs are twice as efficient","picture":musicNote,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":56,"item":4,"unlock":100,"price":650000000000,"wordPrice":"650 Billion","name":"Sarah Figures Out The Movie Halfway Through","description":"True Crime is twice as efficient","picture":trueCrime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":57,"item":3,"unlock":100,"price":60000000000,"wordPrice":"60 Billion","name":"50% Off At Stronghearts","description":"Meat Subs are twice as efficient","picture":beyondMeat,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":58,"item":8,"unlock":100,"price":25500000000000000n,"wordPrice":"25.5 Quadrillion","name":"A Lovely Cote-De-Rhone","description":"Wine is twice as efficient","picture":wine,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":59,"item":9,"unlock":100,"price":375000000000000000n,"wordPrice":"375 Quadrillion","name":"Cuba Gooding Jr Wins The Big Dog Race","description":"Movies are twice as efficient","picture":movie,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":60,"item":10,"unlock":100,"price":5000000000000000000n,"wordPrice":"5 Quintillion","name":"The Rochester Institute Of Technology","description":"Special Places are twice as efficient","picture":house,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":61,"item":11,"unlock":100,"price":70000000000000000000n,"wordPrice":"70 Quintillion","name":"Civ VII Finally Released","description":"Video Games are twice as efficient","picture":videoGame,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":62,"item":12,"unlock":100,"price":850000000000000000000n,"wordPrice":"850 Quintillion","name":"That Big Giant Macys On 34th St","description":"Boutiques are twice as efficient","picture":boutique,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":63,"item":13,"unlock":1,"price":21000000000000000n,"wordPrice":"21 Quadrillion","name":"Haircut. You're Flustered But Excited","description":"Brians are twice as efficient","picture":brian,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":64,"item":13,"unlock":5,"price":105000000000000000n,"wordPrice":"105 Quadrillion","name":"You Know The Creator?","description":"Brians are twice as efficient","picture":brian,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":65,"item":13,"unlock":25,"price":1050000000000000000n,"wordPrice":"1.05 Quintillion","name":"Brian Makes His Famous Roasted Veggie Salad","description":"Brians are twice as efficient","picture":brian,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":66,"item":13,"unlock":50,"price":105000000000000000000n,"wordPrice":"105 Quintillion","name":"You Join A Cornhole League. Good Things To Come","description":"Brians are twice as efficient","picture":brian,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":67,"item":13,"unlock":100,"price":10500000000000000000000n,"wordPrice":"10.5 Sextillion","name":"A New Watch And A Linen Shirt","description":"Brians are twice as efficient","picture":brian,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":68,"item":1,"unlock":1,"price":105000000000000000n,"wordPrice":"105 Quadrillion","name":"The Fridge Is Stocked","description":"Diet Coke is twice as efficient. Brians gain +1% sps per 12 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":13,"unlockTwo":15,"addition":3,"multiply":0.0833333},
    {"index":69,"item":0,"unlock":350,"price":10000000000000000000n,"wordPrice":"10 Quintillion","name":"Septillion Fingers","description":"Multiplies gain from thousand fingers by 20","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2},
    {"index":70,"item":0,"unlock":350,"price":10000000000000000000000n,"wordPrice":"10 Sextillion","name":"Octillion Fingers","description":"Multiplies gain from thousand fingers by 20","picture":cursor,"visible":0,"secondItem":14,"unlockTwo":0,"addition":2},
    {"index":71,"item":1,"unlock":150,"price":50000000000,"wordPrice":"50 Billion","name":"Something To Wash Down Hummus In Bed","description":"Diet Coke is twice as efficient","picture":dietCoke,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":72,"item":2,"unlock":150,"price":550000000000,"wordPrice":"550 Billion","name":"Justin Beiber Concert Number 4","description":"Pop Songs are twice as efficient","picture":musicNote,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":73,"item":4,"unlock":150,"price":65000000000000,"wordPrice":"65 Trillion","name":"Somehting To Watch While Doing Your Makeup","description":"True Crime is twice as efficient","picture":trueCrime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":74,"item":3,"unlock":150,"price":6000000000000,"wordPrice":"6 Trillion","name":"You Convert A Meat Eater","description":"Meat Subs are twice as efficient","picture":beyondMeat,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":75,"item":8,"unlock":150,"price":2550000000000000000n,"wordPrice":"2.5 Quintillion","name":"Complain And Get What You Want (It's Both Kinds Of Wine)","description":"Wine is twice as efficient","picture":wine,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":76,"item":9,"unlock":150,"price":37500000000000000000n,"wordPrice":"37.5 Quintillion","name":"Joe 2: Revenge Of The Volcano","description":"Movies are twice as efficient","picture":movie,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":77,"item":10,"unlock":150,"price":500000000000000000000n,"wordPrice":"500 Quintillion","name":"New Water Skiis For The Boat","description":"Special Places are twice as efficient","picture":house,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":78,"item":11,"unlock":150,"price":7000000000000000000000n,"wordPrice":"7 Sextillion","name":"Abandoney's Second Birthday","description":"Video Games are twice as efficient","picture":videoGame,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":79,"item":12,"unlock":150,"price":85000000000000000000000n,"wordPrice":"85 Sextillion","name":"Cute Little Tchotchke Shop","description":"Boutiques are twice as efficient","picture":boutique,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":80,"item":13,"unlock":150,"price":1050000000000000000000000n,"wordPrice":"1.05 Septillion","name":"New Reality TV Season","description":"Brians are twice as efficient","picture":brian,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":81,"item":5,"unlock":1,"price":14000000,"wordPrice":"14 Million","name":"Matt Gets Into Johns Hopkins","description":"Family/Friends are twice as efficient","picture":family,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":82,"item":5,"unlock":5,"price":70000000,"wordPrice":"70 Million","name":"Rich Solves A Big Case","description":"Family/Friends are twice as efficient","picture":family,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":83,"item":5,"unlock":25,"price":700000000,"wordPrice":"700 Million","name":"Christmas Time","description":"Family/Friends are twice as efficient","picture":family,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":84,"item":5,"unlock":50,"price":70000000000,"wordPrice":"70 Billion","name":"Upgrades To The River House","description":"Family/Friends are twice as efficient","picture":family,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":85,"item":5,"unlock":100,"price":7000000000000,"wordPrice":"7 Trillion","name":"Visit From Jules","description":"Family/Friends are twice as efficient","picture":family,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":86,"item":5,"unlock":150,"price":700000000000000,"wordPrice":"700 Trillion","name":"Timmy, Kathy, Karen, Lorraine, Patty, Robert, Carolyn, Richard, Margaret","description":"Family/Friends are twice as efficient","picture":family,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":87,"item":6,"unlock":1,"price":200000000,"wordPrice":"200 Million","name":"A Fluffy Bear","description":"Nature is twice as efficient","picture":nature,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":88,"item":6,"unlock":5,"price":1000000000,"wordPrice":"1 Billion","name":"Swim Out To Rock Island","description":"Nature is twice as efficient","picture":nature,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":89,"item":6,"unlock":25,"price":10000000000,"wordPrice":"10 Billion","name":"Breakneck Ridge","description":"Nature is twice as efficient","picture":nature,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":90,"item":6,"unlock":50,"price":1000000000000,"wordPrice":"1 Trillion","name":"Cheez It The Mouse","description":"Nature is twice as efficient","picture":nature,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":91,"item":6,"unlock":100,"price":100000000000000,"wordPrice":"100 Trillion","name":"A Whale In The Hudson","description":"Nature is twice as efficient","picture":nature,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":92,"item":6,"unlock":150,"price":10000000000000000n,"wordPrice":"10 Quadrillion","name":"Floating Donut In The River","description":"Nature is twice as efficient","picture":nature,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":93,"item":7,"unlock":1,"price":3300000000,"wordPrice":"3.3 Billion","name":"Naruto Without The Filler","description":"Anime is twice as efficient","picture":anime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":94,"item":7,"unlock":5,"price":16500000000,"wordPrice":"16.5 Billion","name":"You Find A Death Note. Wuh-oh","description":"Anime is twice as efficient","picture":anime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":95,"item":7,"unlock":25,"price":165000000000,"wordPrice":"165 Billion","name":"You Summon Exodia, Winning The Duel","description":"Anime is twice as efficient","picture":anime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":96,"item":7,"unlock":50,"price":16500000000000,"wordPrice":"16.5 Trillion","name":"You Get A New Quirk","description":"Anime is twice as efficient","picture":anime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":97,"item":7,"unlock":100,"price":1650000000000000,"wordPrice":"1.65 Quadrillion","name":"Your Sandshrew Learned Swift","description":"Anime is twice as efficient","picture":anime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":98,"item":7,"unlock":150,"price":165000000000000000n,"wordPrice":"165 Quadrillion","name":"The Titans Attacked But You Attacked Back","description":"Anime is twice as efficient","picture":anime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":99,"item":1,"unlock":1,"price":70000000,"wordPrice":"70 Million","name":"Paula Orders You A Diet Coke With Dinner","description":"Diet Coke is twice as efficient. Family/Friends gain +1% sps per 4 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":5,"unlockTwo":15,"addition":3,"multiply":0.25},
    {"index":100,"item":1,"unlock":1,"price":1000000000,"wordPrice":"1 Billion","name":"You Find The Fabled Sugar Free Cola Falls","description":"Diet Coke is twice as efficient. Nature gains +1% sps per 5 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":6,"unlockTwo":15,"addition":3,"multiply":0.2},
    {"index":101,"item":1,"unlock":1,"price":16500000000,"wordPrice":"16.5 Billion","name":"ILL TAKE A CHIP AND EAT IT (With Some Diet Coke)","description":"Diet Coke is twice as efficient. Anime gains +1% sps per 6 Diet Cokes","picture":dietCoke,"visible":0,"secondItem":7,"unlockTwo":15,"addition":3,"multiply":0.1666667},
    {"index":102,"item":1,"unlock":200,"price":50000000000000,"wordPrice":"50 Trillion","name":"You Win A Lifetime Supply Of Diet Coke","description":"Diet Coke is twice as efficient","picture":dietCoke,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":103,"item":2,"unlock":200,"price":550000000000000,"wordPrice":"550 Trillion","name":"Lana At Primavera","description":"Pop Songs are twice as efficient","picture":musicNote,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":104,"item":3,"unlock":200,"price":6000000000000000,"wordPrice":"6 Quadrillion","name":"A Cow Learns To Speak And Thanks You","description":"Nature is twice as efficient","picture":beyondMeat,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":105,"item":4,"unlock":200,"price":65000000000000000n,"wordPrice":"65 Quadrillion","name":"The Butler Did It","description":"True Crime is twice as efficient","picture":trueCrime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":106,"item":5,"unlock":200,"price":700000000000000000n,"wordPrice":"700 Quadrillion","name":"Sunday Family Dinner","description":"Family/Friends are twice as efficient","picture":family,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":107,"item":6,"unlock":200,"price":10000000000000000000n,"wordPrice":"10 Quintillion","name":"Buttermilk Falls (Either One)","description":"Nature is twice as efficient","picture":nature,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":108,"item":7,"unlock":200,"price":165000000000000000000n,"wordPrice":"165 Quintillion","name":"Yubaba Is Nice Now","description":"Anime is twice as efficient","picture":anime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":109,"item":8,"unlock":200,"price":2550000000000000000000n,"wordPrice":"2.55 Sextillion","name":"A French 75","description":"Wine is twice as efficient","picture":wine,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":110,"item":9,"unlock":200,"price":37500000000000000000000n,"wordPrice":"37.5 Sextillion","name":"Nick Cage Chooses The Declaration","description":"Movies are twice as efficient","picture":movie,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":111,"item":10,"unlock":200,"price":500000000000000000000000n,"wordPrice":"500 Sextillion","name":"The MOST","description":"Special Places are twice as efficient","picture":house,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":112,"item":11,"unlock":200,"price":7000000000000000000000000n,"wordPrice":"7 Septillion","name":"You Save Baldur's Gate With Brainy","description":"Video Games are twice as efficient","picture":videoGame,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":113,"item":12,"unlock":200,"price":85000000000000000000000000n,"wordPrice":"85 Septillion","name":"My God... REAL TOMMY HIL!?!","description":"Boutiques are twice as efficient","picture":boutique,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":114,"item":13,"unlock":200,"price":1050000000000000000000000000n,"wordPrice":"1.05 Octillion","name":"Your Own Personal Handyman","description":"Brians are twice as efficient","picture":brian,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":115,"item":1,"unlock":250,"price":50000000000000000n,"wordPrice":"50 Quadrllion","name":"Zeus Bestows Upon Man The Great Nector","description":"Diet Coke is twice as efficient","picture":dietCoke,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":116,"item":2,"unlock":250,"price":550000000000000000n,"wordPrice":"550 Quadrillion","name":"Alternate Universe Where Kanye Never Went Nuts","description":"Pop Songs are twice as efficient","picture":musicNote,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":117,"item":3,"unlock":250,"price":6000000000000000000n,"wordPrice":"6 Quintillion","name":"The World's Greatest Green Beans - By Sarah Engel","description":"Nature is twice as efficient","picture":beyondMeat,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":118,"item":4,"unlock":250,"price":65000000000000000000n,"wordPrice":"65 Quintillion","name":"You Plan A Gone Girl","description":"True Crime is twice as efficient","picture":trueCrime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":119,"item":5,"unlock":250,"price":700000000000000000000n,"wordPrice":"700 Quintillion","name":"Move To NYC And Make New Friends","description":"Family/Friends are twice as efficient","picture":family,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":120,"item":6,"unlock":250,"price":10000000000000000000000n,"wordPrice":"10 Sextillion","name":"Camping Weekend","description":"Nature is twice as efficient","picture":nature,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":121,"item":7,"unlock":250,"price":165000000000000000000000n,"wordPrice":"165 Sextillion","name":"Woah Did That Castle Just Move?","description":"Anime is twice as efficient","picture":anime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":122,"item":8,"unlock":250,"price":2550000000000000000000000n,"wordPrice":"2.55 Septillion","name":"Wine Flights At Amelie","description":"Wine is twice as efficient","picture":wine,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":123,"item":9,"unlock":250,"price":37500000000000000000000000n,"wordPrice":"37.5 Septillion","name":"As Above So Below, As Above So Below","description":"Movies are twice as efficient","picture":movie,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":124,"item":10,"unlock":250,"price":500000000000000000000000000n,"wordPrice":"500 Septillion","name":"Blue Fire Pit On A Snowy Night","description":"Special Places are twice as efficient","picture":house,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":124,"item":11,"unlock":250,"price":7000000000000000000000000000n,"wordPrice":"7 Octillion","name":"You Avoid The Anglers On Dark Bramble","description":"Video Games are twice as efficient","picture":videoGame,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":126,"item":12,"unlock":250,"price":85000000000000000000000000000n,"wordPrice":"85 Octillion","name":"A Boutique Opens With A Wine Bar","description":"Boutiques are twice as efficient","picture":boutique,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":127,"item":13,"unlock":250,"price":1050000000000000000000000000000n,"wordPrice":"1.05 Nonillion","name":"Hugs That Make You Feel Safe","description":"Brians are twice as efficient","picture":brian,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":128,"item":2,"unlock":15,"price":2800000000000000000n,"wordPrice":"2.8 Quintillion","name":"Gustavo Santaolalla Does It Again","description":"Pop songs gain +5% sps per Nature. Video games gain +0.1% sps per Pop Song","picture":musicNote,"visible":0,"secondItem":11,"unlockTwo":15,"addition":4},
    {"index":129,"item":2,"unlock":75,"price":4002000000000000000n,"wordPrice":"4.002 Quintillion","name":"Country Road, Take Me Home","description":"Pop songs gain +5% sps per Nature. Nature gain +0.1% sps per Pop Song","picture":musicNote,"visible":0,"secondItem":6,"unlockTwo":75,"addition":4},
    {"index":130,"item":3,"unlock":15,"price":66024000000000n,"wordPrice":"66.024 Trillion","name":"Vegan Sushi","description":"Meat Subs gain +5% sps per Anime. Anime gains +0.1% sps per Meat Sub","picture":beyondMeat,"visible":0,"secondItem":7,"unlockTwo":15,"addition":4},
    {"index":131,"item":3,"unlock":75,"price":1020000000000000000000n,"wordPrice":"1.02 Sextillion","name":"A Fava Bean Burger And A Nice Chianti","description":"Meat Subs gain +5% sps per Wine. Wine gains +0.1% sps per Meat Sub","picture":beyondMeat,"visible":0,"secondItem":8,"unlockTwo":75,"addition":4},
    {"index":132,"item":4,"unlock":15,"price":34000000000000000000n,"wordPrice":"34 Quintillion","name":"Murder At Claires","description":"True Crime gains +5% sps per Boutique. Boutiques gain +0.1% sps per True Crime","picture":trueCrime,"visible":0,"secondItem":12,"unlockTwo":15,"addition":4},
    {"index":133,"item":4,"unlock":75,"price":2800000000000000000000000n,"wordPrice":"2.8 Septillion","name":"The Headmistress Sends You on An Important Mission","description":"True Crime gains +5% sps per Video Game. Video Games gain +0.1% sps per True Crime","picture":trueCrime,"visible":0,"secondItem":11,"unlockTwo":75,"addition":4},
    {"index":134,"item":5,"unlock":15,"price":200003000000000000n,"wordPrice":"200.003 Quadrillion","name":"Bolt Castle","description":"Family/Friends gain +5% sps per Special Place. Special Places gain +0.1% sps per Family/Friend","picture":family,"visible":0,"secondItem":10,"unlockTwo":15,"addition":4},
    {"index":135,"item":4,"unlock":75,"price":540000000000000000n,"wordPrice":"540 Quadrillion","name":"Murder Mystery Party","description":"True Crime gains +5% sps per Family/Friend. Family/Friend gains +0.1% sps per True Crime","picture":trueCrime,"visible":0,"secondItem":5,"unlockTwo":75,"addition":4},
    {"index":136,"item":6,"unlock":15,"price":200040000000000n,"wordPrice":"200.04 Quadrillion","name":"Castle Rock","description":"Nature gains +5% sps per Special Place. Special Places gain +0.1% sps per Nature","picture":nature,"visible":0,"secondItem":10,"unlockTwo":15,"addition":4},
    {"index":137,"item":6,"unlock":75,"price":34000000000000000000000000n,"wordPrice":"34 Septillion","name":"They Convert The Clayton H&R Block To A Boutique","description":"Nature gains +5% sps per Boutique. Boutiques gain +0.1% sps per Nature","picture":nature,"visible":0,"secondItem":12,"unlockTwo":75,"addition":4},
    {"index":138,"item":7,"unlock":15,"price":15660000000000000n,"wordPrice":"15.66 Quadrillion","name":"Miyazaki Marathon","description":"Anime gains +5% sps per Movie. Movies gain +0.1% sps per Anime","picture":movie,"visible":0,"secondItem":9,"unlockTwo":15,"addition":4},
    {"index":139,"item":2,"unlock":75,"price":66002000000000000000n,"wordPrice":"66.002 Quintillion","name":"Fighting Evil By Moonlight... You Know The Rest","description":"Pop Songs gain +5% sps per Anime. Anime gains +0.1% sps per Pop Song","picture":musicNote,"visible":0,"secondItem":7,"unlockTwo":75,"addition":4},
    {"index":140,"item":3,"unlock":15,"price":1020000000000000n,"wordPrice":"1.02 Quadrillion","name":"Most Of Our Dinners","description":"Meat Subs gain +5% sps per Wine. Wine gains +0.1% sps per Meat Sub","picture":beyondMeat,"visible":0,"secondItem":8,"unlockTwo":15,"addition":4},
    {"index":141,"item":4,"unlock":75,"price":1020000000000000000000n,"wordPrice":"1.02 Sextillion","name":"Colonel Mustard In The Ball Room With The Poison","description":"True Crime gains +5% sps per Wine. Wine gains +0.1% sps per True Crime","picture":trueCrime,"visible":0,"secondItem":8,"unlockTwo":75,"addition":4},
    {"index":142,"item":3,"unlock":15,"price":15000000000000000n,"wordPrice":"15 Quadrillion","name":"Fish Are Friends, Not Food","description":"Meat Subs gain +5% sps per Movie. Movies gain +0.1% sps per Meat Sub","picture":beyondMeat,"visible":0,"secondItem":9,"unlockTwo":15,"addition":4},
    {"index":143,"item":5,"unlock":75,"price":15003000000000000000000n,"wordPrice":"15.003 Sextillion","name":"Vans Famous Part In Ozark","description":"Family/Friends gain +5% sps per Movie. Movies gain +0.1% sps per Family/Friend","picture":family,"visible":0,"secondItem":9,"unlockTwo":75,"addition":4},
    {"index":144,"item":2,"unlock":15,"price":200000000000000000n,"wordPrice":"200 Quadrillion","name":"Bob Marley On The Boat","description":"Pop Songs gain +5% sps per Special Place. Special Places gain +0.1% sps per Pop Song","picture":musicNote,"visible":0,"secondItem":10,"unlockTwo":15,"addition":4},
    {"index":145,"item":10,"unlock":75,"price":422000000000000000000000000n,"wordPrice":"422 Septillion","name":"The Best Little Apartment In The World","description":"Special Places gain +5% sps per Brian. Brians gain +0.1% sps per Special Place","picture":house,"visible":0,"secondItem":12,"unlockTwo":75,"addition":4},
    {"index":146,"item":8,"unlock":15,"price":2810000000000000000n,"wordPrice":"2.81 Quintillion","name":"Adult Game Night","description":"Wine gain +5% sps per Video Game. Video Games gain +0.1% sps per Wine","picture":wine,"visible":0,"secondItem":11,"unlockTwo":15,"addition":4},
    {"index":147,"item":11,"unlock":75,"price":448000000000000000000000000n,"wordPrice":"448 Septillion","name":"Anticipated Release Of Sarah Smiler","description":"Video Games gain +5% sps per Brian. Brians gain +0.1% sps per Video Game","picture":videoGame,"visible":0,"secondItem":13,"unlockTwo":75,"addition":4},
    {"index":148,"item":5,"unlock":15,"price":34000000000000000000n,"wordPrice":"34 Quintillion","name":"Apricot Lane","description":"Family/Friends gain +5% sps per Boutique. Boutiques gain +0.1% sps per Family/Friend","picture":family,"visible":0,"secondItem":12,"unlockTwo":15,"addition":4},
    {"index":149,"item":9,"unlock":75,"price":34150000000000000000000000n,"wordPrice":"34.15 Septillion","name":"27 Dresses","description":"Movies gain +5% sps per Boutique. Boutiques gain +0.1% sps per Movie","picture":movie,"visible":0,"secondItem":12,"unlockTwo":75,"addition":4},
    {"index":150,"item":7,"unlock":15,"price":420000000000000000000n,"wordPrice":"420 Quintillion","name":"Unleash The Weeb","description":"Anime gain +5% sps per Brian. Brians gain +0.1% sps per Anime","picture":anime,"visible":0,"secondItem":13,"unlockTwo":15,"addition":4},
    {"index":151,"item":6,"unlock":75,"price":420000000000000000000000000n,"wordPrice":"420 Septillion","name":"You Have Allies For When The Penguins Attack","description":"Nature gains +5% sps per Brian. Brians gain +0.1% sps per Nature","picture":nature,"visible":0,"secondItem":13,"unlockTwo":75,"addition":4},
    {"index":152,"item":1,"unlock":300,"price":50000000000000000000n,"wordPrice":"50 Quintillion","name":"A Diet Coke Fountain","description":"Diet Coke is twice as efficient","picture":dietCoke,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":116,"item":2,"unlock":300,"price":550000000000000000000n,"wordPrice":"550 Sextillion","name":"Maroon 5 Concert At The Ampitheater","description":"Pop Songs are twice as efficient","picture":musicNote,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":117,"item":3,"unlock":300,"price":6000000000000000000000n,"wordPrice":"6 Sextillion","name":"Perfectly Crisped Tofu","description":"Nature is twice as efficient","picture":beyondMeat,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":118,"item":4,"unlock":300,"price":65000000000000000000000n,"wordPrice":"65 Sextillion","name":"Steward Solves His First Caper","description":"True Crime is twice as efficient","picture":trueCrime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":119,"item":5,"unlock":300,"price":700000000000000000000000n,"wordPrice":"700 Sextillion","name":"Friendsgiving At Delaneys","description":"Family/Friends are twice as efficient","picture":family,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":120,"item":6,"unlock":300,"price":10000000000000000000000000n,"wordPrice":"10 Septillion","name":"Summit Mt Marcy","description":"Nature is twice as efficient","picture":nature,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":121,"item":7,"unlock":300,"price":165000000000000000000000000n,"wordPrice":"165 Septillion","name":"You Explain Exactly What Happened In Excessive Detail","description":"Anime is twice as efficient","picture":anime,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":122,"item":8,"unlock":300,"price":2550000000000000000000000000n,"wordPrice":"2.55 Octillion","name":"The Great Monk Dom Perignon","description":"Wine is twice as efficient","picture":wine,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":123,"item":9,"unlock":300,"price":37500000000000000000000000000n,"wordPrice":"37.5 Octillion","name":"If You Made It This Far You Can Pick The Next 3 Movies","description":"Movies are twice as efficient","picture":movie,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":124,"item":10,"unlock":300,"price":500000000000000000000000000000n,"wordPrice":"500 Octillion","name":"Shity Diner","description":"Special Places are twice as efficient","picture":house,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":124,"item":11,"unlock":300,"price":7000000000000000000000000000000n,"wordPrice":"7 Nonillion","name":"Yoyu Win Jeopardy On A Kingdom Hearts Question","description":"Video Games are twice as efficient","picture":videoGame,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":126,"item":12,"unlock":300,"price":85000000000000000000000000000000n,"wordPrice":"85 Nonillion","name":"You Win A $500 Macys Shopping Spree","description":"Boutiques are twice as efficient","picture":boutique,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    {"index":127,"item":13,"unlock":300,"price":1050000000000000000000000000000000n,"wordPrice":"1.05 Decillion","name":"A Tennis Pong Rival","description":"Brians are twice as efficient","picture":brian,"visible":0,"secondItem":14,"unlockTwo":0,"addition":1},
    











  ])

  // 
  //   
  
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
        const fingersTotal = (thousandFingersCount["addition"]*thousandFingersCount["amount"])
        
        setClicks(prev=>(prev+autoClicks+(fingersTotal)))
        if (autoClicks > 0){
          setSoFar(soFar.map((item)=>{
            if (item["index"]===0){
              return {...item,soFar:item["soFar"]+(mainStoreItems[parseFloat(item["index"])]["clicks"]*mainStoreItems[parseFloat(item["index"])]["amount"])+(mainStoreItems[parseFloat(item["index"])]["amount"]*fingersTotal)}
            }
            else{
              return {...item,soFar:item["soFar"]+(mainStoreItems[parseFloat(item["index"])]["clicks"]*mainStoreItems[parseFloat(item["index"])]["amount"])}
            }
            
          }))
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
            realAutoClickTotal = realAutoClickTotal + currentAutoClickValue + (mainItem["amount"]*mainItem["clicks"])
            return mainItem
            
          })
  
          setClicks(clicks-item["price"])
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
        setClicks(clicks-item["price"])
        
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

        setClicks(clicks-item["price"])
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

        setClicks(clicks-item["price"])
        setAutoClicks(realAutoClickTotal)
        setMainStoreItems(newMainStoreItems)
      }
      }
  }


  const clicksString=numberify(clicks)
  const perSecondString=numberify(autoClicks+(thousandFingersCount["addition"]*thousandFingersCount["amount"]))
  const mouseString=numberify(clickValue + ((thousandFingersCount["addition"]*thousandFingersCount["amount"])))


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
              <Store soFar={soFar} buyMain={buyMain} mainClicks={clicks} thousandFingersCount={thousandFingersCount}/>
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