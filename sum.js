function sum(numbers) {
    let add=0;
    for(let i=0; i<numbers.length; i++ ){
      add+=numbers[i];
    }
  return add;
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
