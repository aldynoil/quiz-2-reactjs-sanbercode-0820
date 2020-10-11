// Volume Balok
const vbalok = (...rest) =>{  
    let p = 9
    let l = 8
    let t = 10
    const hasil= p * l * t
    rest.filter(el => hasil + el )
    return hasil

}
console.log(vbalok(9,8,10))

// Volume Kubus
const vkubus = (...rest) =>{
    let s = 2    
    const hasils= s * s * s
    rest.filter(el => hasils + el)
    return hasils
}

console.log(vkubus(2))