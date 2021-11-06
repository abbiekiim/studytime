let result = [];
let arr = 	[3, 3, 3, 3, 3, 3];
var answer = [];
    let max = 0;
    
    const count = {};
    arr.forEach(function (x) { count[x] = (count[x] || 0) + 1;});
    
    for (let CN = 1; CN <4; CN++){
    if(arr.includes(CN)){
}
    else {
      
count[CN] = 0; 
}
}
    for(const key in count){
        if (count[key] > max){
            max = count[key];
        }
    }
    
 
    for(const key in count){
            let difference = max - count[key];
            answer.push(difference)
        }



console.log(count);
console.log(answer);
