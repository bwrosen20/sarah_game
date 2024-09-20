import {useState,useContext} from 'react'
import {StoreItemsContext} from '../App'
import numberify from '../numberify'

function StoreItem({mainClicks,extras,soFar,clicks,visible,amount,item,index,buyMain,price,picture}){

const [storeBlurb,setStoreBlurb]=useState(false)
const mainStoreItems = useContext(StoreItemsContext)


let newClicks = clicks

extras.forEach((extra,index)=>{
    const storeItem = mainStoreItems[index]
    newClicks = newClicks + (extra*storeItem["amount"]*clicks/100)
})

function handleMouseMove(e){
    
    console.log(index)
    let cursor = document.getElementsByName('noStoreBlurb')[index]
    console.log(cursor)
    let y = e.clientY;
    cursor.style.top=(y-30)+"px"
}

let perSecond = newClicks*amount

const perSecondString=numberify(perSecond)
const soFarString=numberify(soFar)
const priceString=numberify(price)
const newClicksString=numberify(newClicks)




    return <div><div className={visible>1 ? price<=mainClicks ? "storeItem" :"storeItemNoBuy": "mysteryItem"} onClick={buyMain} value={index} onMouseMove={handleMouseMove}>
            <img src={picture} className={visible>1 ? "storePicture" : "mysteryPicture"} alt="storePicture" value={index} onMouseEnter={(()=>{setStoreBlurb(visible>1?true:false)})} onMouseLeave={(()=>{setStoreBlurb(false)})}/>
            <div className="storeRight" value={index} onMouseEnter={(()=>{setStoreBlurb(visible>1?true:false)})} onMouseLeave={(()=>{setStoreBlurb(false)})}>
                <h1 className="storeWord" value={index}>{visible>1 ? item : "???"}</h1>
                <h2 className="storePrice" value={index}>😊{priceString}</h2>
            </div>
            <h1 className="storeAmount" onClick={buyMain} value={index} onMouseEnter={(()=>{setStoreBlurb(visible>1?true:false)})} onMouseLeave={(()=>{setStoreBlurb(false)})}>{visible>1 ? amount : null}</h1>
            
            
    </div>
    <div id = {"cursor"} name={"noStoreBlurb"} className={storeBlurb ? "storeBlurb" : "noStoreBlurb"}>
    <ul >
        <li>Each {item} produces <span className="bold">{newClicksString} smiles</span></li>
        <li>{amount} {item}s producing <span children className="bold">{perSecondString} smiles</span> per second</li>
        <li><span className="bold">{soFarString} smiles</span> produced so far</li>
    </ul>
</div>
</div>
}

export default StoreItem