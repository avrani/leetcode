//"listen" → "silent"
//"debit card" → "bad credit"

const isAnagram1 = function (word1, word2) {
    return word1.split("").sort().join("") === word2.split("").sort().join("");
}

//Another solution

const isAnagram2 = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    let word1Obj = {};
    let word2Obj = {};
    for (let i = 0; i < word1.length; i++) {
        if (!word1Obj.hasOwnProperty(word1[i])) {
            word1Obj[word1[i]] = 1;
        } else {
            word1Obj[word1[i]]++;
        }
        if (!word2Obj.hasOwnProperty(word2[i])) {
            word2Obj[word2[i]] = 1;
        } else {
            word2Obj[word2[i]]++;
        }
    }
    for (let key in word1Obj) {
        if (word1Obj[key] !== word2Obj[key]) {
            return false;
        }
    }
    return true;
}


const result1 = isAnagram1('debit card', 'bad credit')
const result2 = isAnagram2('debit card', 'bad credit')
console.log('result1', result1);
console.log('result2', result2);