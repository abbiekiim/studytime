// only 1, 2, and 3 can be in the given array.
// and we have to find out how many more times a number has to be put in the array to match the number with the most occurance
// for example.
// given [1,1,2,2,2,3]
// answer [1,0,2]
// becuase 1 needs to appear 1 more time and 2, 0 times and 3, 3 times

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
