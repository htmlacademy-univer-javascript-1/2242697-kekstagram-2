function getRandomNumber (a, b) {
    if(a>b){c=b; b=a; a=c};
    var arr = [];
    for(let i=0; i <= (b-a); i++){
       arr[i]=[Math.random(), i+a];
    }
    return arr.sort()[0][1];
 }