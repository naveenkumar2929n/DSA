let arr=[0,0,1,1,2,2,3,3,4,4,];


function isDuplicate(arr){
  let i=0;
  for(let j=0;j<arr.length;j++){
    if(arr[j]>arr[i]){
      i++;
      arr[i]=arr[j];
    }
  }
  return i+1;
}

let result=isDuplicate(arr);
console.log(result);
