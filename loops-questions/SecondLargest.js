let arr=[10,20,20];
function secondLargest(arr){
  let firstLargest=-Infinity;
  let secondLargest=-Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr.length<2){
      return null;
    }
    if(arr[i]>firstLargest){
      secondLargest=firstLargest;
      firstLargest=arr[i];
    }else if(arr[i]>secondLargest &&arr[i]!=firstLargest){
      secondLargest=arr[i];
    }
  }
  return secondLargest;
}

let result=secondLargest(arr);
console.log(result);
