


const arr1 = [1, 2, 3, 1, 4];
const arr2 = [[1, 2, 3, [1, 2, 3, 1, 4], 1, 4], 1, 2, 3, 4];
const arr3 = [[0], 1, 2, 3, 1, 4];

function flatArray(myArr) {
    let result = []
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].length) {
            result.push(...flatArray(myArr[i]));
        } else {
            result.push(myArr[i])
        }
    }
    return result;
}


const result = flatArray(arr2);
console.log('result',result);

