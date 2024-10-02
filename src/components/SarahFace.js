import sarahFace from "../sarahPictures/sarah.png"
import darkLightSarah from '../sarahPictures/darkLightSarah.png'
import survivorSarah from '../sarahPictures/survivorSarah.png'
import mermaidSarah from '../sarahPictures/mermaidSarah.png'
import {useState, useContext} from 'react'

function SarahFace({clickOnFace,goldenSmile}){

let currentOne = 0

if (goldenSmile["on"]===true){
    goldenSmile["whichOne"]===1 ? currentOne=1: goldenSmile["whichOne"]===2?currentOne=2:currentOne=3
}

    //0:lucky (smileyFace)
    //1:frenzy for a minute and 17 seconds.(survivor)
    //2:juice 1 smile causer (mermaid)
    //3:super frenzy for 30 seconds(Death Note) 

    return <div>
                {/* <h1 className="sarahFace" onClick = {clickOnFace}>H1</h1> */}
                <img src={currentOne===0 ? sarahFace : currentOne===1 ?survivorSarah:currentOne===2? mermaidSarah:darkLightSarah} className="sarahFace" alt="sarah" onClick={clickOnFace}/>
    </div>
}

export default SarahFace