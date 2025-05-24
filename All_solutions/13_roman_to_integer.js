var romanToInt = function (s) {
    let order = { I: 0, V: 1, X: 2, L: 3, C: 4, D: 5, M: 6 }
    let vals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let val2 = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let actual = s.split();
    if (s.length == 1) {
        return vals[s]
    }
    let finalVal = 0
    for (let eachCharPlace = 0; eachCharPlace < s.length; eachCharPlace++) {
        let firstRom = s[eachCharPlace];
        let secRom = s[eachCharPlace + 1];
        if (order[firstRom] < order[secRom]) {
            finalVal = finalVal + (vals[secRom] - vals[firstRom])
            eachCharPlace++;
        } else {
            finalVal = finalVal + vals[firstRom]
        }
    }
    return finalVal;
};


var romanToInt = function (s) {
    const vals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = vals[s[i]];
        let next = vals[s[i + 1]];
        
        // If the next value is larger, we subtract the current value
        if (next > curr) {
            total -= curr;
        } else {
            total += curr;
        }
    }

    return total;
};
