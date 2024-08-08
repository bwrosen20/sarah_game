import sarahFace from "../sarahPictures/sarah.png"
import {useState, useContext} from 'react'
import {ClicksContext} from '../App'

function SarahFace({clickOnFace}){

    const clicks = useContext(ClicksContext)



    return <div>
                {/* <h1 className="sarahFace" onClick = {clickOnFace}>H1</h1> */}
                <img src={sarahFace} className="sarahFace" alt="sarah" onClick={clickOnFace}/>
    </div>
}

export default SarahFace