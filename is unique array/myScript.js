
//one soultion
function isUniqueArray1(nums) {
    return new Set(nums).size !== nums.length;
}

//second soultion
function isUniqueArray2(nums) {
    const myset = new Set();
    for (let i = 0; i < nums.length; i++) {
        if(myset.has(nums[i])){
            return false;
        }else{
            myset.add(nums[i])
        }
    }
    return true
}

const arr1 = [1, 2, 3, 1, 4];
const arr2 = [1, 2, 3, 4];


