import {useState} from 'react'

function Upgrade({upgrade,getUpgrade}){

    const [blurb,setBlurb] = useState(false)

    return <div onClick={getUpgrade} value={upgrade["index"]}>
        <div className="upgrade" onMouseEnter={(()=>{setBlurb(true)})} onMouseLeave={(()=>{setBlurb(false)})}>
            <img src={upgrade["picture"]} value={upgrade["index"]} className="upgradePicture" alt="storePicture"/>
        </div>
        <div className={blurb?"upgradeBlurb":"noBlurb"}>
            <div className="upgradeFirstRow">
            <img src={upgrade["picture"]} className="upgradeBlurbPicture" alt="storePicture"/>
                <h6 className="upgradeName">{upgrade["name"]}</h6>
                <h6>😊{upgrade["wordPrice"]}</h6>
            </div>
            <p className="upgradeDescription">{upgrade["description"]}</p>
        </div>
    </div>
    
}
 
export default Upgrade