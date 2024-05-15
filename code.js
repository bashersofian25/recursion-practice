const fibsRec = (number) =>  {
    let arr = [];
    if(number<0){throw("invalid input: input must be larger than or equal to ZERO")};
    fib(number, arr);
    return arr;
};
const fib = (number, arr = []) => {
    if(number < 2){
        arr[number] = number;
        return number;
    }else {
        let temp = fib(number-1,arr)+fib(number-2,arr);
        arr[number] = temp;
        return temp;
    }
};


const merge = (leftArr, rightArr) => {
    let leftLength = leftArr.length;
    let rightLength = rightArr.length;
    let newArr = [];
    let leftCounter = 0;
    let rightCounter = 0;
    while (true){
        if(leftCounter>=leftLength && rightCounter>=rightLength){
            break;
        }
        if(leftArr[leftCounter]<rightArr[rightCounter]){
            if(leftCounter<leftLength){
                newArr.push(leftArr[leftCounter]);
                leftCounter++;
            }else if(rightCounter<rightLength) {
                newArr.push(leftArr[leftCounter]);
                leftCounter++;
            }
        
        }else{
            if(rightCounter<rightLength){
                newArr.push(rightArr[rightCounter]);
                rightCounter++;
            }else if(leftCounter<leftLength){
                newArr.push(leftArr[leftCounter]);
                leftCounter++;
            }
                
        }

    }
    return newArr;
};
const mergeSort = (arr) => {
    if(arr.length <= 1){return arr}
    let left = arr.slice(0, (arr.length)/2);
    let right = arr.slice(((arr.length)/2), arr.length);
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
};



let arr = [2,1,3,4,5,0,10,-1,11,4839,-200];

let left = arr.slice(0, (arr.length)/2);

let right = arr.slice(((arr.length)/2), arr.length);

console.log(mergeSort(arr));

