import UpgradeItem from './UpgradeItem'
import numberify from '../numberify.js'
import {useContext, useState} from 'react'
import {StoreItemsContext} from '../App'

function Statistics({upgrades,clicksSoFar,soFar,clicks}){

    upgrades.sort((a,b)=>a["price"]>b["price"] ? 1 : b["price"]>a["price"] ? -1 : 0)

    const mainStoreItems = useContext(StoreItemsContext)
    const [spoilerMode,setSpoilerMode]=useState(false)

    let amount = 0
    let smileMakers = 0
    upgrades.forEach((up)=>{
        if (up["visible"]>0){
            amount = amount+1
        }
    })

    mainStoreItems.forEach((item)=>{
        smileMakers = smileMakers + item["amount"]
    })

    let totalSoFar = 0

    soFar.forEach((thing)=>{
        totalSoFar = totalSoFar + thing["soFar"]
    })

    totalSoFar = numberify(totalSoFar + clicksSoFar)
    const clickStringValue = numberify(clicks)
    const smileMakerValue = numberify(smileMakers)
    const manualString = numberify(clicksSoFar)

    return<div className="settingsScreen">
        <h1 className="heading">STATS</h1>
        <h4 className="lilStatsHeading" >Smiles In Bank: {clickStringValue}</h4>
        <h4 className="lilStatsHeading">Smiles Made: {totalSoFar}</h4>
        <h4 className="lilStatsHeading">Manual Smiles: {manualString}</h4>
        <h5 className="lilStatsHeading">Smile Makers Owned: {smileMakerValue}</h5>
        
       
        <h3 className="bigWords">Upgrades: <span className="parenth">(scroll down)</span></h3>
        <h6 className="littleWords">Upgrades unlocked: {amount}/{upgrades.length}</h6>
        <div className="upgradeGrid">
            {upgrades.map((grade)=>(<UpgradeItem spoilerMode={spoilerMode} grade={grade}/>))}
            
        </div>
        {/* <button onClick={()=>{setSpoilerMode(!spoilerMode)}}className="spoilerMode">Spoiler Mode</button> */}
    </div>
}

export default Statistics