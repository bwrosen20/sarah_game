

function numberify(variable){

if (variable>10){
    variable=Math.round(variable)
}

const soFar = variable%1!==0?Math.round(variable*10)/10:Math.round(variable)
let soFarArray = soFar.toString().split('')
let soFarString = "Hola"

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

return soFarString
}

export default numberify