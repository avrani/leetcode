


const arr1 = [1, 2, 3, 1, 4];
const arr2 = [[1, 2, 3, [1, 2, 3, 1, 4], 1, 4], 1, 2, 3, 4];


function flatArray(myArr) {
    let result = []
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].length) {
            result = [...myArr[i]];
        }else{
            result.push(myArr[i])
        }
    }
    console.log('result', result);
}


flatArray(arr2);
