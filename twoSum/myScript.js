//function get array and 1 number value
//should return the index of the 2 values that together equale to the 1 value that got as second argument
//for example:
//[1,2,3] and the number is 3 - > the function should return [0,1]


const twoSum1 = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === value && i != j) {
                return [i, j];
            }
        }
    }
}


const twoSum2 = (nums, target) => {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    console.log('numMap',numMap);
    console.log('nums',nums);
    
    return [];
}


const result2 = twoSum2([4, 2, 5, 7, 1, 3], 9);
console.log('result2', result2);
