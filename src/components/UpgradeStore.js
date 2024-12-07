import Upgrade from './Upgrade'


function UpgradeStore({upgrades,getUpgrade}){

    upgrades.sort((a,b)=>a["price"]>b["price"] ? 1 : b["price"]>a["price"] ? -1 : 0)

    const upgradesToShow = upgrades.filter((upgrade)=>(upgrade.visible===1 || upgrade.visible===2))



    return<div className="upgradeStore">
            <h4>Upgrades</h4>
        <div className="upgradeItems">  
            {upgradesToShow.map((upgrade)=>(
                <Upgrade getUpgrade={getUpgrade} upgrade={upgrade}/>
            ))}
        </div>
    </div>
}

export default UpgradeStore