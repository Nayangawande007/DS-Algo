// You are Given a series of positive integer numbers in the form of a sorted array as
// Ai where i is the index. N is the positive number which you have to check in the
// given array Ai whether the given N is duplicate in the Array or not. If it is duplicate
// output as “FALSE” if it is non duplicate output as “TRUE”.
// Note: Use Binary search algorithm to find the N.
// let arr = [1, 3, 5, 5, 7, 8, 9];
// findNumber = 5;

const arr = [1,3,4,5,5,7,7];
const target = 5;

function duplicate_find(arr,target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        
        let mid = Math.floor((right + left)/2);

        console.log('left', left, right, mid)

        if(arr[mid] === target){
            if(arr[mid] === arr[mid + 1] || arr[mid] === arr[mid-1]){
                return true;
            
            }else{
                return false;
            }
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }

    }

    return -1;
}


console.log(duplicate_find(arr,target));