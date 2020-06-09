let getPermutations = string => {
    if(string.length <= 1) {
        return [string];
    }

    let allCharsExceptLast = string.slice(0, string.length - 1);
    let lastChar = string[string.length - 1];

    let permutationsBuilder = getPermutations(allCharsExceptLast);

    let permutations = [];
    permutationsBuilder.forEach(permutation => {
        for(let i = 0; i < allCharsExceptLast.length + 1; i++) {
            permutations.push(allCharsExceptLast.slice(0, i) + lastChar + allCharsExceptLast.slice(i))
        }
    })

    return permutations;
}

getPermutations('cats')