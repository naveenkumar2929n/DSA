let arr=[0,1,0,2,3,6,9,9,1,0];


function move(arr){
  let x=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      arr[x]=arr[i];
      x++;
    }
  
  }
  for(let i=x;i<arr.length;i++){
    arr[i]=0;
  }
  return x;
}

console.log(move(arr));

  