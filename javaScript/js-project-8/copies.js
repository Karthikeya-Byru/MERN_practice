let point={
    x:2,
    y:-2,
    z:1
}
//creating a copy of an obj
let point_1=Object.assign({},point)
console.log(point);
console.log(point_1);

point.h=10;
console.log(point);
console.log(point_1);

//spread operator
let copyPoint={...point}
console.log(copyPoint);