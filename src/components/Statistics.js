import UpgradeItem from './UpgradeItem'

function Statistics({upgrades}){

    let amount = 0
    upgrades.forEach((up)=>{
        if (up["visible"]===3){
            amount = amount+1
        }
    })

    return<div className="settingsScreen">
        <h1 className="heading">STATS</h1>
        <h4>Smiles In Bank: </h4>
        <h4>Smiles Made: </h4>
        <h5>Smile Makers Owned: </h5>
        
       
        <h3>Upgrades <span className="parenth">(scroll down)</span>:</h3>
        <h6>Upgrades unlocked: {amount}/{upgrades.length}</h6>
        <div className="upgradeGrid">
            {upgrades.map((grade)=>(<UpgradeItem grade={grade}/>))}
        </div>
    </div>
}

export default Statistics