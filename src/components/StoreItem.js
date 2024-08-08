import sarahFace from "../sarahPictures/sarah.png"
import cursor from "../mainStorePictures/cursor.png"
import dietCoke from '../mainStorePictures/dietCoke.png'
import musicNote from '../mainStorePictures/musicNote.png'
import beyondMeat from '../mainStorePictures/beyondMeat.png'
import trueCrime from '../mainStorePictures/trueCrime.png'
import family from '../mainStorePictures/family.png'
import anime from '../mainStorePictures/anime.png'
import nature from '../mainStorePictures/nature.png'
import wine from '../mainStorePictures/wine.png'
import movie from '../mainStorePictures/movie.png'
import house from '../mainStorePictures/house.png'
import videoGame from '../mainStorePictures/videoGame.png'
import boutique from '../mainStorePictures/boutique.png'
import brian from '../mainStorePictures/brian.png'


function StoreItem({item,value}){

const imageArray = [cursor,dietCoke, musicNote, beyondMeat, trueCrime, family, nature, anime,
                    wine, movie, house, videoGame, boutique, brian
]
    return <div className="storeItem">
        <img src={imageArray[value]} className="storePicture" alt="storePicture"/>
        <h1 className="storeWord">{item}</h1>
    </div>
}

export default StoreItem