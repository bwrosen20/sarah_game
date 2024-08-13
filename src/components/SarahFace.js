import sarahFace from "../sarahPictures/sarah.png"
import {useState, useContext} from 'react'

function SarahFace({clickOnFace}){



    return <div>
                {/* <h1 className="sarahFace" onClick = {clickOnFace}>H1</h1> */}
                <img src={sarahFace} className="sarahFace" alt="sarah" onClick={clickOnFace}/>
    </div>
}

export default SarahFace