import question from '../question.png'
import {useState} from 'react'

function UpgradeItem({grade}){

    const hidden = grade["visible"]
    const picture = hidden>0 ? grade["picture"]:question
    const [blurb,setBlurb]=useState(false)


    function handleMouseMove(e){
            let cursor = document.getElementsByName('noBlurb')[grade.index]
            let y = e.clientY;
            let x = e.clientX;
            cursor.style.top=(y-130)+"px"
            cursor.style.left=(x-80)+"px"
    }

    return<div>
        <div onMouseMove={handleMouseMove} onMouseEnter={(()=>{setBlurb(hidden>0?true:false)})} onMouseLeave={(()=>{setBlurb(false)})}>
            <img className={hidden<3?"preGridImage":"gridImage"} name="gridImage" src={picture} onClick={()=>(console.log(grade["index"]))}/>
        </div>
        <div id = {"cursor"} name="noBlurb" className={blurb ? (hidden<3? "preBlurb":"blurb") : "noBlurb"}>
 
            <h5 className="lilBlurbTitle">{grade["name"]}</h5>
            <h6 className="lilBlurbDescribe">{grade["description"]}</h6>
            {/* <li>{amount} {item}s producing <span children className="bold">{perSecondString} smiles</span> per second</li>
            <li><span className="bold">{soFarString} smiles</span> produced so far</li> */}
    </div>
</div>
}

export default UpgradeItem