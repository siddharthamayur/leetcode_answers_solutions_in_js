/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = []
    let all = s.split('');
    for (let [index, val] of all.entries()) {
        if (val == '(' || val == '{' || val == '[') {
            arr.push(val)
        } else {
            if (val == ']' || val == '}' || val == ')') {
                if (arr.length == 0) return false
                let ontop = arr[arr.length - 1]
                if (ontop == '[' && val == ']') {
                    arr.pop();
                } else if (ontop == '{' && val == '}') {
                    arr.pop();
                } else if (ontop == '(' && val == ')') {
                    arr.pop();
                } else{
                    arr.push(val)
                }
            }
        }

    }
    if (arr.length == 0) {
        return true
    }
    return false
};