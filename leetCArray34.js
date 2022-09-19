// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109
// Accepted
// 1,312,594
// Submissions
// 3,173,304
// Seen this question in a real interview before?

// Yes

// No


const arr = [5,7,7,8,8,10]
const target = 8;

function searchRight(arr, target){
	let left = -1;
	let right = arr.length; 

	while(left+1 < right){
		let mid = Math.floor((left+right)/2);
		console.log('left', left, 'right', right, 'mid', mid)
		if(arr[mid] > target){
			right = mid
		}else{
			left = mid
		}
	}

	console.log('left', left, 'right', right)
	if(arr[right -1] === target){
		return right-1;
	}else{
		return -1;
	}


}

function searchLeft(arr, target){
	let left = -1;
	let right = arr.length; 

	while(left+1 < right){
		let mid = Math.floor((left+right)/2);
		console.log('left', left, 'right', right, 'mid', mid)
		if(arr[mid] >= target){
			right = mid
		}else{
			left = mid
		}
	}

	console.log('left', left, 'right', right)
	if(arr[right] === target){
		return right;
	}
	else {
		return -1;
	}
}

function searchTarget(arr, target){
	const leftIndex = searchLeft(arr, target);
	const rightIndex = searchRight(arr, target);

	if(leftIndex === -1 && rightIndex === -1){
		return [-1,-1]
	}
	else{
		return [leftIndex, rightIndex]
	}

}


console.log(searchTarget(arr, target))