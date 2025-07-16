let arr=[4,3,6,7,2,1];

function sort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
      if(arr[j]<arr[j-1]){
        let temp=arr[j];
        arr[j]=arr[j-1];
        arr[j-1]=temp;
      }
    }
  }return arr;
}
let result=sort(arr)

console.log(result);
