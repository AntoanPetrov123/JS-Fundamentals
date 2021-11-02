function maxNumber(array) {
   let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let firstElement = array[i];
        let isTop = true;
        for (let j = i+1; j < array.length; j++) {
            
            let secondElement = array[j];
            if (firstElement <= secondElement) {
                isTop = false;
                break;
            }
        }
        if(isTop){
            newArray.push(firstElement);
        }
        
        
    }
console.log(newArray.join(' '));
}
maxNumber([1, 4, 3, 2])