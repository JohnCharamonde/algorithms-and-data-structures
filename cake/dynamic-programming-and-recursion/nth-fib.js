// fib(0);  // => 0
// fib(1);  // => 1
// fib(2);  // => 1
// fib(3);  // => 2
// fib(4);  // => 3
// ...

// 0 indexed...

let nthFib = (n) => {
  if(n === 0 || n === 1) {
      return n;
  }

  return nthFib(n - 1) + nthFib(n - 2);
}

// n = 5
// return nthFib(4) + nthFib(3)
// return     3     +     2      =  5

// n = 4                                                                       n = 3
// return nthFib(3) + nthFib(2)                                                return nthFib(2) + nthFib(1)..
// return     2     +     1     =   3                                          return nthFib(2) + 1;
//                                                                             return    1      + 1   = 2

// n = 3
// return nthFib(2) + nthFib(1)...         n = 2                               n = 2                                 
// return nthFib(2) + 1                    return nthFib(1) + nthFib(0)...     return nthFib(1) + nthFib(0)...       
//                                         return 1 + 0...                     return 1 + 0...
//                                         return 1                            return 1

function nFib(n) {
    if(n === 0) return n;

    let nth = 1
    let lessOne = 1
    let lessTwo = 0
    
    for(let i = 3; i < n + 1; i++) {
      lessTwo = lessOne;
      lessOne = nth;
      nth = lessTwo + lessOne;
    }

    return nth;
}

nFib(18)