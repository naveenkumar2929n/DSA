let arr=[-20,-10,0,10,20,69];


function binarySearch(arr,target){
  let start=0;
  let end=arr.length-1;
  while(start<=end){
    let mid=Math.floor(start+(end-start)/2);
    if(target==arr[mid]){
      return mid;
    }
    if(target<arr[mid]){
      end=mid-1;
    }else{
      start=mid+1;
    }
  }return -1;
}

let result=binarySearch(arr,20);
console.log(result);
