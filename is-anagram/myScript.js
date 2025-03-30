//"listen" → "silent"
//"debit card" → "bad credit"

const isAnagram = function (word1, word2) {
    return word1.split("").sort().join("") === word2.split("").sort().join("");
}

const result = isAnagram('debit card', 'bad credit')

console.log('result',result);
