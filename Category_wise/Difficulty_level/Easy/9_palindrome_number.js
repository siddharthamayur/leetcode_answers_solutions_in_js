var isPalindrome = function (x) {
    const str = x.toString(); // Convert number to string
    for (let counter = 0; counter <= Math.floor(str.length / 2); counter++) {
        if (str[counter] !== str[str.length - 1 - counter]) {
            return false;
        }
    }
    return true;
};

var isPalindrome = function(x) {
    if (x < 0) return false;

    let original = x;
    let reversed = 0;

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
};
