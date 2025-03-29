function flatArray1(myArr) {
    let result = []
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].length) {
            result.push(...flatArray1(myArr[i]));
        } else {
            result.push(myArr[i])
        }
    }
    return result;
}

function flatArray2(myArr) {
    return myArr.flat(Infinity);
}

const arr1 = [1, 2, 3, 1, 4];
const arr2 = [[1, 2, 3, [1, 2, 3, 1, 4], 1, 4], 1, 2, 3, 4];
const arr3 = [[0], 1, 2, 3, 1, 4];


const result = flatArray2(arr2);

console.log('result', result);

