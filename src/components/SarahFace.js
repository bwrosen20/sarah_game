import sarahFace from "../sarahPictures/sarah.png"
import darkLightSarah from '../sarahPictures/darkLightSarah.png'
import survivorSarah from '../sarahPictures/survivorSarah.png'
import mermaidSarah from '../sarahPictures/mermaidSarah.png'
import {useState, useContext} from 'react'

function SarahFace({clickOnFace,goldenSmile}){

let currentOne = 0

if (goldenSmile["on"]===true){
    goldenSmile["whichOne"]===1 ? currentOne=1: currentOne=2
}


console.log(currentOne)
    return <div>
                {/* <h1 className="sarahFace" onClick = {clickOnFace}>H1</h1> */}
                <img src={currentOne===0 ? sarahFace : currentOne===1 ? darkLightSarah:survivorSarah} className="sarahFace" alt="sarah" onClick={clickOnFace}/>
    </div>
}

export default SarahFace