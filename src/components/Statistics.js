import UpgradeItem from './UpgradeItem'

function Statistics({upgrades}){

    return<div className="settingsScreen">
        <h1 className="heading">STATS</h1>
        <h4>Smiles In Bank: </h4>
        <h4>Smiles Made: </h4>
        <h5>Smile Makers Owned: </h5>
        
       
        <h3>Upgrades <span className="parenth">(scroll down)</span>:</h3>
        <div className="upgradeGrid">
            {upgrades.map((grade)=>(<UpgradeItem grade={grade}/>))}
        </div>
    </div>
}

export default Statistics