import Upgrade from './Upgrade'


function UpgradeStore({upgrades,getUpgrade}){

    return<div className="upgradeStore">
            <h4>Upgrades</h4>
        <div className="upgradeItems">  
            {upgrades.map((upgrade)=>(
                <Upgrade getUpgrade={getUpgrade} upgrade={upgrade}/>
            ))}
        </div>
    </div>
}

export default UpgradeStore