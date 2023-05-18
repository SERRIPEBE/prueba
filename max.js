    function max(numbers){
        let maxn=0;
        while(numbers.length!=0){
            for(let i=0; i<numbers.length; i++){
                if(numbers[i]>maxn){
                    maxn=numbers[i];
                }
            }
            return maxn;
        }
          
        }


console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined