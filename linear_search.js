//Linear_search

const arr = [1,7,9,2,6];
const target = 6;

//Itration linear search
// let wow = []
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] === target){
//         console.log('index of target is ', target , i);
//         wow.push(i);
//     }
// }


// console.log('indexes',wow);
//Time complexity O(n);
//Space complexity O(1)


//recursive Approach

function Linear_serch(arr,target,count){
    if(arr[count] === target){
        return count;
    }

    if(arr.length-1 === count){
        return -1;
    }

    return Linear_serch(arr,target,count+1);
}

let result = Linear_serch(arr,target,0)

console.log('result',result);