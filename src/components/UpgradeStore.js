import Upgrade from './Upgrade'


function UpgradeStore({upgrades}){

    return<div className="upgradeStore">
            <h1 className="storeTitle">Upgrades</h1>
        <div className="upgradeItems">  
            {upgrades.map((upgrade)=>(
                <Upgrade upgrade={upgrade}/>
            ))}
        </div>
    </div>
}

export default UpgradeStore