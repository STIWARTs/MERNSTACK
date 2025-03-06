//helper function--normal function can be used in any file

function genTicket(n) {//gen n numbers
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((sum, carr) => sum + carr, 0);
}

export { genTicket, sum }; //exporting the function to be used in other files
