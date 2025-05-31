let sample={
    a:10,
    b:20
}
//convert JS to JSON
let json = JSON.stringify(sample)
console.log(json);

//convert json to java scipt
let jsondata='{"a":10,"b":20}'
let covert=JSON.parse(jsondata)
console.log(covert);