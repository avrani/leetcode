

const majorityElement = (arr) => {
    const storeObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (storeObj.hasOwnProperty(arr[i])) {
            storeObj[arr[i]]++;
        } else {
            storeObj[arr[i]] = 1;
        }
    }
    let keyMajorety;
    for (let key in storeObj) {
        if (!keyMajorety) {
            keyMajorety = key;
        } else if (storeObj[key] > storeObj[keyMajorety]) {
            keyMajorety = key;
        }
    }
    if (storeObj[keyMajorety] < (arr.length / 2)) {
        return null;
    }
    else {
        return keyMajorety;
    }
}

const result = majorityElement([2, 2, 1, 1, 1, 2, 2, 5, 5, 5, 5, 5, 5, 5, 2]);

//complexity:
//time  - O of n
//memory -O of n

//Better using Boyer-Moore Voting Algorithm:

const majorityElement2 = (arr) => {
    let candidate = null;
    let count = 0;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // בדיקה שהוא באמת רוב
    let occurences = 0;
    for (let num of arr) {
        if (num === candidate) {
            occurences++;
        }
    }

    return occurences > arr.length / 2 ? candidate : null;
}
