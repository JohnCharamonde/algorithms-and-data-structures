let hi = (names) => {
    for(let i = 0; i < names.length; i++) {
        console.log(`hi ${names[i]}!`);
        for(let j = 0; j < names.length; j++) {
            console.log(`noooo.... not you, ${names[j]}!!!!!!!!!!!`)
        }
    }
}