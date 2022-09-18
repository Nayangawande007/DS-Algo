// Given an array of positive integers, and a value sum, determine if there is a subset
// of the given set with sum equal to given sum. Find the two numbers that
// summation will be equal to the value in the sum variable.
// Input: arr = [1, 3, 4, 5, 7, 10, 11, 12] , sum = 9
// Output: 5 4
// There is a subset (4, 5) with sum 9. 


let arr = [1, 3, 4, 5, 7, 10, 11, 12];

let target = 9;

function pairSum(arr,target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(arr[mid] + arr[mid+1] === target || arr[mid] + arr[mid-1] === target){
            if(arr[mid] + arr[mid + 1] === target){
                return [arr[mid], arr[mid + 1]];
            }
            else{
                return [arr[mid],arr[mid - 1]];
            }
        }
        else if(arr[mid] + arr[mid-1] < target || arr[mid] - arr[mid + 1] < target){
                left = mid + 1;
        }
        else{
                right = mid - 1;
        }
    }

    return -1;
}

console.log(pairSum(arr,target));