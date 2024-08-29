import {useState} from 'react'
import numberify from '../numberify'

function StoreItem({soFar,clicks,visible,amount,item,index,buyMain,price,picture}){

const [storeBlurb,setStoreBlurb]=useState(false)


let perSecond = clicks*amount

const perSecondString=numberify(perSecond)
const soFarString=numberify(soFar)
const priceString=numberify(price)




    return <div className={visible>1 ? "storeItem" : "mysteryItem"} onClick={buyMain} value={index}>
            <img src={picture} className={visible>1 ? "storePicture" : "mysteryPicture"} alt="storePicture" value={index} onMouseEnter={(()=>{setStoreBlurb(visible>1?true:false)})} onMouseLeave={(()=>{setStoreBlurb(false)})}/>
            <div className="storeRight" value={index} onMouseEnter={(()=>{setStoreBlurb(visible>1?true:false)})} onMouseLeave={(()=>{setStoreBlurb(false)})}>
                <h1 className="storeWord" value={index}>{visible>1 ? item : "???"}</h1>
                <h2 className="storePrice" value={index}>😊{priceString}</h2>
            </div>
            <h1 className="storeAmount" onMouseEnter={(()=>{setStoreBlurb(visible>1?true:false)})} onMouseLeave={(()=>{setStoreBlurb(false)})}>{visible>1 ? amount : null}</h1>
            <div className={storeBlurb ? "storeBlurb" : "noStoreBlurb"}>
                <ul >
                    <li>Each {item} produces <span className="bold">{clicks} smiles</span></li>
                    <li>{amount} {item}s producing <span children className="bold">{perSecondString} smiles</span> per second</li>
                    <li><span className="bold">{soFarString} smiles</span> produced so far</li>
                </ul>
            </div>
            
    </div>
}

export default StoreItem