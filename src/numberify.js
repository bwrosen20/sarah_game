

function numberify(variable){

if (variable>10){
    variable=Math.round(variable)
}

const soFar = variable%1!==0?Math.round(variable*10)/10:Math.round(variable)



let soFarString = soFar.toLocaleString('fullwide', {useGrouping:false})


if (1000 <= soFar && soFar <1000000){
    
    let firstPart = soFarString.slice(-6,-3)
    let secondPart = soFarString.slice(-3)
    soFarString = `${firstPart},${secondPart}`

}
else if (1000000 <= soFar && soFar <1000000000){
    let firstPart = soFarString.slice(-9,-6)
    let secondPart = soFarString.slice(-6,-3)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Million`
    }
    else{
        soFarString = `${firstPart} Million`
    }
    
}
else if (1000000000 <= soFar && soFar <1000000000000){
    let firstPart = soFarString.slice(-12,-9)
    let secondPart = soFarString.slice(-9,-6)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Billion`
    }
    else{
        soFarString = `${firstPart} Billion`
    }
    
}
else if (1000000000000 <= soFar && soFar <1000000000000000){
    let firstPart = soFarString.slice(-15,-12)
    let secondPart = soFarString.slice(-12,-9)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Trillion`
    }
    else{
        soFarString = `${firstPart} Trillion`
    }
    
}
else if (1000000000000000 <= soFar && soFar <1000000000000000000n){
    let firstPart = soFarString.slice(-18,-15)
    let secondPart = soFarString.slice(-15,-12)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Quadrillion`
    }
    else{
        soFarString = `${firstPart} Quadrillion`
    }
    
}
else if (1000000000000000000n <= soFar && soFar <1000000000000000000000n){
    let firstPart = soFarString.slice(-21,-18)
    let secondPart = soFarString.slice(-18,-15)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Quintillion`
    }
    else{
        soFarString = `${firstPart} Quintillion`
    }
    
}
else if (1000000000000000000000n <= soFar && soFar <1000000000000000000000000n){
    let firstPart = soFarString.slice(-24,-21)
    let secondPart = soFarString.slice(-21,-18)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Sextillion`
    }
    else{
        soFarString = `${firstPart} Sextillion`
    }
    
}
else if (soFar > 1000){
    soFarString = "Too Many"
}

return soFarString
}

export default numberify