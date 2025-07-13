let arr=[2,3,4,5];
let target=2;

function search(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
      return i;
    }
    
  }
  return -1;
}
let ans=search(arr,target);
console.log(ans);
