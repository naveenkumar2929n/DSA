let arr=[5,4,3,7,2,1];

function sort(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j>0;j--){
      if(arr[j]<arr[j-1]){
      let temp=arr[j];
      arr[j]=arr[j-1];
      arr[j-1]=temp;
    }
  }
}return arr;
}

let result=sort(arr);
console.log(result);
