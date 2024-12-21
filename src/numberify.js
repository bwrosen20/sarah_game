

function numberify(variable){

let soFar = 0

if (variable>10){
    variable=Math.round(variable)
    soFar = variable%1!==0?Math.round(variable*10)/10:Math.round(variable)
}
else{
    try{ soFar = variable%1!==0?variable.toFixed(1):variable} catch(e) { console.log(e); console.log(variable); }
}



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

else if (1000000000000000000000000n <= soFar && soFar <1000000000000000000000000000n){
    let firstPart = soFarString.slice(-27,-24)
    let secondPart = soFarString.slice(-24,-21)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Septillion`
    }
    else{
        soFarString = `${firstPart} Septillion`
    }
    
}

else if (1000000000000000000000000000n <= soFar && soFar <1000000000000000000000000000000n){
    let firstPart = soFarString.slice(-30,-27)
    let secondPart = soFarString.slice(-27,-24)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Octillion`
    }
    else{
        soFarString = `${firstPart} Octillion`
    }
    
}

else if (1000000000000000000000000000000n <= soFar && soFar <1000000000000000000000000000000000n){
    let firstPart = soFarString.slice(-33,-30)
    let secondPart = soFarString.slice(-30,-27)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Nonllion`
    }
    else{
        soFarString = `${firstPart} Nonillion`
    }
    
}

else if (1000000000000000000000000000000000n <= soFar && soFar <1000000000000000000000000000000000000n){
    let firstPart = soFarString.slice(-36,-33)
    let secondPart = soFarString.slice(-33,-30)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Decllion`
    }
    else{
        soFarString = `${firstPart} Decillion`
    }
    
}

else if (1000000000000000000000000000000000000n <= soFar && soFar <1000000000000000000000000000000000000000n){
    let firstPart = soFarString.slice(-39,-36)
    let secondPart = soFarString.slice(-36,-33)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Undecillion`
    }
    else{
        soFarString = `${firstPart} Undecillion`
    }
    
}

else if (1000000000000000000000000000000000000000n <= soFar && soFar <1000000000000000000000000000000000000000000n){
    let firstPart = soFarString.slice(-42,-39)
    let secondPart = soFarString.slice(-39,-36)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Duodecillion`
    }
    else{
        soFarString = `${firstPart} Duodecillion`
    }
    
}

else if (1000000000000000000000000000000000000000000n <= soFar && soFar <1000000000000000000000000000000000000000000000n){
    let firstPart = soFarString.slice(-45,-42)
    let secondPart = soFarString.slice(-42,-39)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Tredecillion`
    }
    else{
        soFarString = `${firstPart} Tredecillion`
    }
    
}

else if (1000000000000000000000000000000000000000000000n <= soFar && soFar <1000000000000000000000000000000000000000000000000n){
    let firstPart = soFarString.slice(-48,-45)
    let secondPart = soFarString.slice(-45,-42)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Quattuordecillion`
    }
    else{
        soFarString = `${firstPart} Quattuordecillion`
    }
    
}

else if (1000000000000000000000000000000000000000000000000n <= soFar && soFar <1000000000000000000000000000000000000000000000000000n){
    let firstPart = soFarString.slice(-51,-48)
    let secondPart = soFarString.slice(-48,-45)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Quindecillion`
    }
    else{
        soFarString = `${firstPart} Quindecillion`
    }
    
}

else if (1000000000000000000000000000000000000000000000000000n <= soFar && soFar <1000000000000000000000000000000000000000000000000000000n){
    let firstPart = soFarString.slice(-54,-51)
    let secondPart = soFarString.slice(-51,-48)
    for (let i=0; i<secondPart.length+2; i++){
        if (secondPart.slice(-1)[0]==='0'){
            secondPart = secondPart.slice(0,-1)
        }
    }
    if (secondPart.length>0){
        soFarString = `${firstPart}.${secondPart} Sexdecillion`
    }
    else{
        soFarString = `${firstPart} Sexdecillion`
    }
    
}


else if (soFar > 1000){
    soFarString = "Too Many"
}

const firstBunch = soFarString.split('.')[0]

if (soFarString.split('.').length>1){
    const secondBunch = soFarString.split('.')[1]

    if (secondBunch.split(' ').length>1){
        let numby = secondBunch.split(' ')[0]
        const final = secondBunch.split(' ')[1]
        if (numby.length===2){
            soFarString = `${firstBunch}.${numby}0 ${final}`
        }
    }   


}


return soFarString
}

export default numberify