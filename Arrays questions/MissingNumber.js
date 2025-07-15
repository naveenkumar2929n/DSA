let arr=[1,2,4,5,0];

function find(arr){
  let n=arr.length
  let totalsum=n*(n+1)/2;
  let partialsum=0;
  for(let i=0;i<arr.length;i++){
    partialsum+=arr[i];
  }
  return totalsum-partialsum;
}


console.log(find(arr));
