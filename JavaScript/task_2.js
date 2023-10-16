const arr=[1,10,4,7,3,2,9,5,16];
const n=arr.length;
for(let i=0;i<n-1;i++){
    let max=i;
    for(let j=i+1;j<n;j++){
        if(arr[j]>arr[max]){
            max=j;
        }
    }
    if(max!=i){
        const temp=arr[i];
        arr[i]=arr[max];
        arr[max]=temp;
    }
}
console.log(arr);