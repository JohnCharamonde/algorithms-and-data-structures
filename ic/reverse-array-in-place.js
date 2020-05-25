let chars = ['h', 'e', 'l', 'o', 'o', 'j']

let reverse = (arr) => {
  let temp;
  for(let i = 0; i < arr.length / 2; i++) {
    temp = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

reverse(chars)