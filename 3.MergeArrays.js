function mergeArrays(arr1, arr2){
let resultArray = [];
for(let i=0; i<arr1.length; i++){
    

        let currentElement1 = arr1[i];
        let currentElement2 = arr2[i];

        if(i % 2 === 0){
            let addingNumber =  Number(currentElement1) + Number(currentElement2);
            resultArray.push(addingNumber);
        }else{
            let addingNumber = currentElement1 + currentElement2;
            resultArray.push(addingNumber);
        }
    
    let resultArrayAsString = resultArray.join(' - ');
    

}
let resultArrayAsString = resultArray.join(' - ');
console.log(resultArrayAsString);
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)