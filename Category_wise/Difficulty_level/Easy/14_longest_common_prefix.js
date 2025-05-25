/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    let first = strs[0];
    let final = ''
    for (let i = 0; i <= first.length; i++) {
        let lastMax = first.substring(0, i)
        for (let eachStr of strs) {
            if (!eachStr.startsWith(lastMax)) {
                return final;
            }
        }
        final = lastMax
    };
}

var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let prefix = strs[0]; // Step 1

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }

    return prefix;
};
