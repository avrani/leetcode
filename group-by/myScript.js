
/**
 * @param {Function} fn
 * @return {Object}
 */

const arr = [2, 1, 3, 4];
Array.prototype.groupBy = function (fn) {
    
    const obj = {}
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            debugger
            if (JSON.stringify(this[i]) === JSON.stringify(this[j]) && i !== j) {
                if (!(i.toString() in obj)) {
                    obj[i.toString() ] = []
                }
                obj[i.toString() ].push(this[j])
            }
        }
    }
    return obj;
};

const res = arr.groupBy();
console.log('res',res);

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */