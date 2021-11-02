function magicSum(array, magicNumber){
let newArray = [];
    for(let i = 0; i < array.length - 1; i++){
        let currentNumber = array[i];
        for(let j = i + 1; j < array.length; j++){
            let secondNumber = array[j];
            if(currentNumber + secondNumber === magicNumber){
                newArray.push(currentNumber, secondNumber);
                
               console.log(array[i] + ` ` + array[j]);
            }
        }
    }

}
magicSum([1, 7, 6, 2, 19, 23],8);