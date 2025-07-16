let arr=[5,4,3,2,1];

function sort(arr){
  let i=0;
  while(i<arr.length){
    let correct=arr[i]-1;
    if(arr[i]!=arr[correct]){
      let temp=arr[i];
      arr[i]=arr[correct];
      arr[correct]=temp;
    }else{
      i++;
    }
  }return arr;
}

let result=sort(arr);
console.log(result);
