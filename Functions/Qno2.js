// function to find area , circumference and diameter of a circule
 caslculatcircle=(radius)=>{
    const diameter=radius*2;
    const circumference=2*3.1416*radius;
    const area= 3*radius*radius;
    return{
        diameter,
        circumference,
        area
    }
}

const circule=caslculatcircle(3)
console.log(circule);