
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


function StoreItem({amount,item,index,buyMain,price,picture}){

const imageArray = [cursor,dietCoke, musicNote, beyondMeat, trueCrime, family, nature, anime,
                    wine, movie, house, videoGame, boutique, brian
]

const priceArray = Math.ceil(price).toString().split('')
let priceString = "Hi"

if (price < 1000){
    priceString = price.toString()
}
else if (1000 <= price && price <1000000){
    let firstPart = priceArray.slice(0,priceArray.length-3).join().replace(',','').replace(',','')
    let secondPart = priceArray.slice(-3).join().replace(',','').replace(',','')
    priceString = `${firstPart},${secondPart}`
}
else if (1000000 <= price && price <1000000000){
    let firstPart = priceArray.slice(0,priceArray.length-6).join().replace(',','').replace(',','')
    let secondPart = priceArray.slice(-6,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        priceString = `${firstPart}.${secondPart} Million`
    }
    else{
        priceString = `${firstPart} Million`
    }

    
}
else if (1000000000 <= price && price <1000000000000){
    let firstPart = priceArray.slice(0,priceArray.length-9).join().replace(',','').replace(',','')
    let secondPart = priceArray.slice(-9,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        priceString = `${firstPart}.${secondPart} Billion`
    }
    else{
        priceString = `${firstPart} Billion`
    }

    
}
else if (1000000000000 <= price && price <1000000000000000){
    let firstPart = priceArray.slice(0,priceArray.length-12).join().replace(',','').replace(',','')
    let secondPart = priceArray.slice(-12,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        priceString = `${firstPart}.${secondPart} Trillion`
    }
    else{
        priceString = `${firstPart} Trillion`
    }

    
}
else if (1000000000000000 <= price && price <1000000000000000000n){
    let firstPart = priceArray.slice(0,priceArray.length-15).join().replace(',','').replace(',','')
    let secondPart = priceArray.slice(-15,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        priceString = `${firstPart}.${secondPart} Quadrillion`
    }
    else{
        priceString = `${firstPart} Quadrillion`
    }

    
}
else if (1000000000000000000n <= price && price <1000000000000000000000n){
    let firstPart = priceArray.slice(0,priceArray.length-18).join().replace(',','').replace(',','')
    let secondPart = priceArray.slice(-18,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        priceString = `${firstPart}.${secondPart} Quintillion`
    }
    else{
        priceString = `${firstPart} Quintillion`
    }

    
}
else if (1000000000000000000000n <= price && price <1000000000000000000000000n){
    let firstPart = priceArray.slice(0,priceArray.length-21).join().replace(',','').replace(',','')
    let secondPart = priceArray.slice(-21,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        priceString = `${firstPart}.${secondPart} Sextillion`
    }
    else{
        priceString = `${firstPart} Sextillion`
    }

    
}
else if (1000000000000000000000000n <= price && price <1000000000000000000000000000n){
    let firstPart = priceArray.slice(0,priceArray.length-24).join().replace(',','').replace(',','')
    let secondPart = priceArray.slice(-24,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        priceString = `${firstPart}.${secondPart} Septillion`
    }
    else{
        priceString = `${firstPart} Septillion`
    }

}
else{
    priceString = "Too Many"
}

    return <div className="storeItem" onClick={buyMain} value={index}>
        <img src={picture} className="storePicture" alt="storePicture" value={index}/>
        <div className="storeRight" value={index}>
            <h1 className="storeWord" value={index}>{item}</h1>
            <h2 className="storePrice" value={index}>😊{priceString}</h2>
        </div>
        <h1 className="storeAmount">{amount}</h1>
    </div>
}

export default StoreItem