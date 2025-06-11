
let inputValue = 398754;
let res = "";

const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    VII: 8,
    VII: 7,
    VI: 6,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1,
  };
    const romanToInteger = (intValue) => {
        for(let symbol in romanMap ) {
            console.log(symbol, intValue)
            const symbolValue = romanMap[symbol];
            while (intValue >= symbolValue) {
                res += symbol;
                intValue -= romanMap[symbol];
            }  
        }
   
        return res;
    }

  console.log(romanToInteger(inputValue))


