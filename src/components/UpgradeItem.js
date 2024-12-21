import question from '../question.png'
import {useState} from 'react'

function UpgradeItem({grade,spoilerMode}){

    const hidden = grade["visible"]
    const picture = hidden>0 || spoilerMode ? grade["picture"]:question
    const [blurb,setBlurb]=useState(false)


    function handleMouseMove(e){
            let blurbScreen = document.getElementsByName(`noBlurb_${grade["index"]}`)[0]
           
            
            let y = e.clientY;
            let x = e.clientX;
            blurbScreen.style.top=(y-130)+"px"
            blurbScreen.style.left=(x-80)+"px"
    }

    return<div>
        <div onMouseMove={handleMouseMove} onMouseEnter={(()=>{setBlurb(hidden>0 || spoilerMode?true:false)})} onMouseLeave={(()=>{setBlurb(false)})}>
            <img className={hidden<3?"preGridImage":"gridImage"} name="gridImage" src={picture} onClick={()=>(console.log(grade["index"]))}/>
        </div>
        <div id = {"blurbScreen"} name={`noBlurb_${grade["index"]}`}  className={blurb ? (hidden<3 ? "preBlurb":"blurb") : "noBlurb"}>
 
            <h5 className="lilBlurbTitle">{grade["name"]}</h5>
            <h6 className="lilBlurbDescribe">{grade["description"]}</h6>
            {/* <li>{amount} {item}s producing <span children className="bold">{perSecondString} smiles</span> per second</li>
            <li><span className="bold">{soFarString} smiles</span> produced so far</li> */}
    </div>
</div>
}

export default UpgradeItem