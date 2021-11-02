function equalSum(array) {
    let hasFoundResult = false;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            let currentNumber = array[j];
            leftSum += currentNumber;
        } for (let k = i + 1; k < array.length; k++) {
            let currentNumber = array[k];
            rightSum += currentNumber;

        }
        if (rightSum === leftSum) {
            console.log(i);
            hasFoundResult = true;
            break;
        }

    }
    if (hasFoundResult === false) {
        console.log('no');
    }

}
equalSum([1, 2, 3, 3]);