function maxIndex(numbers){
    let max=0;
    let maxIn=0;
    while(numbers.length!=0){
        for(let i=0; i<numbers.length; i++){
            if(numbers[i]>max){
                max=numbers[i];
                maxIn=i;
            }
        }   
    }
    maxIn =-1;
    return maxIn;
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1