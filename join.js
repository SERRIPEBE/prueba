function join(arreglo){
    if(arreglo.length == 0){
        return " ";

    }
    let string = String(arreglo[0]);
    for(let i=1; i<arreglo.length; i++){
        string += " " + String(arreglo[i]);
    }
return string;
}
console.log(join([])) 
console.log(join([1, 3, 2])) 
console.log(join([10, 9, 8, 7, 6, 5, 4])) 
console.log(join(["S", "E", "R", "G", "I", "O"])) 