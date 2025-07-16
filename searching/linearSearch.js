let arr=[3,4,5,9];

function linearSearch(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
      return i;
    }
  }return -1;
}

let result=linearSearch(arr,9);
console.log(result);


