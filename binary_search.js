// const arr = [1,2,5,7,13,15,16,18,24,28,29]
// const target = 32;


// function binarySearch(arr,target){
//     let left = 0;
//     let right = arr.length-1;

//     while(left <= right){
//         let mid = Math.floor((left + right)/2);

//         console.log('start', left, mid, right) 
        
//         if(arr[mid] === target){
//             return mid;
//         }
//         else if(arr[mid] < target){
//             left = mid + 1;
//         }
//         else{
//             right = mid - 1;
//         }
        
//         console.log('End', left, mid, right)

//     }

//     return -1;
// }

// console.log(binarySearch(arr,target));


//Binary_Search by recursion

const arr = [1,2,4,5,7,9]
const target = 7;

function binary_search(arr, left, right, target){
   
    
    let mid = Math.floor((left + right)/2);
    console.log("mid value in arry",arr[mid]);
    if (arr[mid] === target){
        return mid;
    }
    
    if(left > right){
        return -1;
    }

    if(arr[mid] < target){
        return binary_search(arr, mid + 1, right, target);
    }
    else{
        return binary_search(arr, left, mid - 1, target);
    } 

    }

console.log( binary_search(arr, 0, arr.length, target));