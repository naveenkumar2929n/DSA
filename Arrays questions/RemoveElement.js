let arr=[3,4,5,2,1,3,3];
function removeElement(arr,val){
  let x=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=val){
      arr[x]=arr[i];
      x++;
    }
  }return x;
}


let result=removeElement(arr,3);
console.log(result);
