if (soFar%1!==0){
    soFar=soFar.toFixed(1)
}

if (soFar < 1000){
    soFarString = soFar.toString()
}
else if (1000 <= soFar && soFar <1000000){
    let firstPart = soFarArray.slice(0,soFarArray.length-3).join().replace(',','').replace(',','')
    let secondPart = soFarArray.slice(-3).join().replace(',','').replace(',','')
    soFarString = `${firstPart},${secondPart}`
}
else if (1000000 <= soFar && soFar <1000000000){
    let firstPart = soFarArray.slice(0,soFarArray.length-6).join().replace(',','').replace(',','')
    let secondPart = soFarArray.slice(-6,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Million`
    }
    else{
        soFarString = `${firstPart} Million`
    }
    
}
else if (1000000000 <= soFar && soFar <1000000000000){
    let firstPart = soFarArray.slice(0,soFarArray.length-9).join().replace(',','').replace(',','')
    let secondPart = soFarArray.slice(-9,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Billion`
    }
    else{
        soFarString = `${firstPart} Billion`
    }

    
}
else if (1000000000000 <= soFar && soFar <1000000000000000){
    let firstPart = soFarArray.slice(0,soFarArray.length-12).join().replace(',','').replace(',','')
    let secondPart = soFarArray.slice(-12,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Trillion`
    }
    else{
        soFarString = `${firstPart} Trillion`
    }

    
}
else if (1000000000000000 <= soFar && soFar <1000000000000000000n){
    let firstPart = soFarArray.slice(0,soFarArray.length-15).join().replace(',','').replace(',','')
    let secondPart = soFarArray.slice(-15,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Quadrillion`
    }
    else{
        soFarString = `${firstPart} Quadrillion`
    }

    
}
else if (1000000000000000000n <= soFar && soFar <1000000000000000000000n){
    let firstPart = soFarArray.slice(0,soFarArray.length-18).join().replace(',','').replace(',','')
    let secondPart = soFarArray.slice(-18,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Quintillion`
    }
    else{
        soFarString = `${firstPart} Quintillion`
    }

    
}
else if (1000000000000000000000n <= soFar && soFar <1000000000000000000000000n){
    let firstPart = soFarArray.slice(0,soFarArray.length-21).join().replace(',','').replace(',','')
    let secondPart = soFarArray.slice(-21,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Sextillion`
    }
    else{
        soFarString = `${firstPart} Sextillion`
    }

    
}
else if (1000000000000000000000000n <= soFar && soFar <1000000000000000000000000000n){
    let firstPart = soFarArray.slice(0,soFarArray.length-24).join().replace(',','').replace(',','')
    let secondPart = soFarArray.slice(-24,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Septillion`
    }
    else{
        soFarString = `${firstPart} Septillion`
    }

}
else{
    soFarString = "Too Many"
}


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
    secondPart=secondPart.join().replace(',','').replace(',','')
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
    secondPart=secondPart.join().replace(',','').replace(',','')
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
    secondPart=secondPart.join().replace(',','').replace(',','')
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
    secondPart=secondPart.join().replace(',','').replace(',','')
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
    secondPart=secondPart.join().replace(',','').replace(',','')
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
    secondPart=secondPart.join().replace(',','').replace(',','')
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
    secondPart=secondPart.join().replace(',','').replace(',','')
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

if (perSecond < 1000){
    perSecondString = perSecond.toString()
}
else if (1000 <= perSecond && perSecond <1000000){
    let firstPart = perSecondArray.slice(0,perSecondArray.length-3).join().replace(',','').replace(',','')
    let secondPart = perSecondArray.slice(-3).join().replace(',','').replace(',','')
    perSecondString = `${firstPart},${secondPart}`
}
else if (1000000 <= perSecond && perSecond <1000000000){
    let firstPart = perSecondArray.slice(0,perSecondArray.length-6).join().replace(',','').replace(',','')
    let secondPart = perSecondArray.slice(-6,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        perSecondString = `${firstPart}.${secondPart} Million`
    }
    else{
        perSecondString = `${firstPart} Million`
    }

    
}
else if (1000000000 <= perSecond && perSecond <1000000000000){
    let firstPart = perSecondArray.slice(0,perSecondArray.length-9).join().replace(',','').replace(',','')
    let secondPart = perSecondArray.slice(-9,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        perSecondString = `${firstPart}.${secondPart} Billion`
    }
    else{
        perSecondString = `${firstPart} Billion`
    }

    
}
else if (1000000000000 <= perSecond && perSecond <1000000000000000){
    let firstPart = perSecondArray.slice(0,perSecondArray.length-12).join().replace(',','').replace(',','')
    let secondPart = perSecondArray.slice(-12,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        perSecondString = `${firstPart}.${secondPart} Trillion`
    }
    else{
        perSecondString = `${firstPart} Trillion`
    }

    
}
else if (1000000000000000 <= perSecond && perSecond <1000000000000000000n){
    let firstPart = perSecondArray.slice(0,perSecondArray.length-15).join().replace(',','').replace(',','')
    let secondPart = perSecondArray.slice(-15,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        perSecondString = `${firstPart}.${secondPart} Quadrillion`
    }
    else{
        perSecondString = `${firstPart} Quadrillion`
    }

    
}
else if (1000000000000000000n <= perSecond && perSecond <1000000000000000000000n){
    let firstPart = perSecondArray.slice(0,perSecondArray.length-18).join().replace(',','').replace(',','')
    let secondPart = perSecondArray.slice(-18,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        perSecondString = `${firstPart}.${secondPart} Quintillion`
    }
    else{
        perSecondString = `${firstPart} Quintillion`
    }

    
}
else if (1000000000000000000000n <= perSecond && perSecond <1000000000000000000000000n){
    let firstPart = perSecondArray.slice(0,perSecondArray.length-21).join().replace(',','').replace(',','')
    let secondPart = perSecondArray.slice(-21,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        perSecondString = `${firstPart}.${secondPart} Sextillion`
    }
    else{
        perSecondString = `${firstPart} Sextillion`
    }

    
}
else if (1000000000000000000000000n <= perSecond && perSecond <1000000000000000000000000000n){
    let firstPart = perSecondArray.slice(0,perSecondArray.length-24).join().replace(',','').replace(',','')
    let secondPart = perSecondArray.slice(-24,3)
    for (let i=0; i<secondPart.length+1; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart.pop()
        }
    }
    secondPart=secondPart.join().replace(',','').replace(',','')
    if (secondPart.length>0){
        perSecondString = `${firstPart}.${secondPart} Septillion`
    }
    else{
        perSecondString = `${firstPart} Septillion`
    }

}
else{
    perSecondString = "Too Many"
}
