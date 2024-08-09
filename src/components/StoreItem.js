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


function StoreItem({item,index,buyMain,price}){

const imageArray = [cursor,dietCoke, musicNote, beyondMeat, trueCrime, family, nature, anime,
                    wine, movie, house, videoGame, boutique, brian
]
    return <div className="storeItem" onClick={buyMain} value={index}>
        <img src={imageArray[index]} className="storePicture" alt="storePicture" value={index}/>
        <div className="storeRight" value={index}>
            <h1 className="storeWord" value={index}>{item}</h1>
            <h2 className="storePrice" value={index}>{Math.ceil(price)}</h2>
        </div>
    </div>
}

export default StoreItem