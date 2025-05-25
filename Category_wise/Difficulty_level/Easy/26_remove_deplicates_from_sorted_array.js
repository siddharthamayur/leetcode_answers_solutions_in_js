var removeDuplicates = function (nums) {
    let uniques = [];
    for (let [index, val] of nums.entries()) {
        if (!uniques.includes(val)) {
            uniques.push(val)
        } 
    }
    for (let i = 0; i <= uniques.length; i++) {
        nums[i] = uniques[i] 
    }
    return uniques.length;
};

