
//136. Single Number
//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

let arr=[2,2,7,6,7,6,4];

function Single(arr){
  let xor=0;
  for(let i=0;i<arr.length;i++){
    xor=xor^arr[i];
  }
  return xor;
}



console.log(Single(arr));
