import UpgradeItem from './UpgradeItem'
import numberify from '../numberify.js'
import {useContext} from 'react'
import {StoreItemsContext} from '../App'

function Statistics({upgrades,clicksSoFar,soFar,clicks}){

    const mainStoreItems = useContext(StoreItemsContext)

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

    return<div className="settingsScreen">
        <h1 className="heading">STATS</h1>
        <h4 className="lilStatsHeading" >Smiles In Bank: {clickStringValue}</h4>
        <h4 className="lilStatsHeading">Smiles Made: {totalSoFar}</h4>
        <h5 className="lilStatsHeading">Smile Makers Owned: {smileMakerValue}</h5>
        
       
        <h3 className="bigWords">Upgrades: <span className="parenth">(scroll down)</span></h3>
        <h6 className="littleWords">Upgrades unlocked: {amount}/{upgrades.length}</h6>
        <div className="upgradeGrid">
            {upgrades.map((grade)=>(<UpgradeItem grade={grade}/>))}
        </div>
    </div>
}

export default Statistics