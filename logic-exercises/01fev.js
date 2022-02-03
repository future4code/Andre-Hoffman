let arr1to100= [] ;

for (let i = 1; i < 101; i++) {
    arr1to100.push(i)
  };

console.log("length 100: ", arr1to100.length);

const outNumber = Math.floor(Math.random() * 10) + 1;

arr1to100.splice(outNumber, 1);

console.log("length 99: ", arr1to100.length);

let count = 0;

for (let value of arr1to100) {
  count += value
}

const diff = ( 5050 - count )

console.log("Missing number is: ", diff)

//console.log(arr1to100[0],arr1to100[1],arr1to100[98], arr1to100[99])