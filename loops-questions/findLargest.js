let arr=[2,5,6,17,8];

function findLargest(arr){
  let max=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
}

let ans=findLargest(arr);
console.log(ans);
