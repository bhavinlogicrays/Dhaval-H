var current = [1, 8, 3, 10],
   
    isMatch = false,
    missing = null;

var i = 0, y = 0,
    lenC = current.length;
  
    
    
    let max = current[0]
let msg = [];



//console.log(msg);

for(let i = 0; i<=current.length*current.length; i++){
if(max < current[i]){
max = current[i]
}
}
console.log("max",max);
for(let w=0;w<=max;w++)
{
  msg.push(w);
  //console.log(w);
}
//console.log(msg);


    for (let i = 0; i < max; i++)
    {
        let j;
        for (j = 0; j < current.length; j++)
            if (msg[i] == current[j])
                break;
 
// console.log("j",j)
// console.log("current",current.length);
        if (j == current.length)
      
            console.log(msg[i]);
    }