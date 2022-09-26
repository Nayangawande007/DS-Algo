// // Problem – You will be given an array having N elements and a number K (1<=K<=N). We need to split our array into K
// // segments such that the maximum sum of the segments is the minimum possible.
// // Example - 
// // Input - [1, 2, 3, 4], K = 3
// // Output - 4 ( {1,2}, {3}, {4} (Maximum sum is 4)
// // Input - [1, 3, 2, 4, 10, 8, 4, 2, 5, 3], K = 4
// // Output - 12


// Splitting an Array
// Intuition – Our task is to find the minimum of possible maximum sum of all segments. This can be done by keeping
// track of the sum and updating it based on the given condition.
// Naive Approach – We can check for all possibilities and update our maximum sum. These possibilities can be found
// using backtracking which we have already seen in our previous sessions.
// Efficient Approach – We can use Binary search to get an optimal solution. Let’s see each step - 
// 1. In binary search, minimum sum is 1 and maximum sum will be sum of all elements in array
// 2. Consider mid as maximum segment sum
// 3. Keep track of count of segments, till their sum is less than mid value.
// 4. If count is less than or equal to mid value, then mid value is possible else it will not
// 5. At last, find the minimum possible mid value which satisfies the condition.
// Code Link ->  https://jsfiddle.net/p5j4s7h1/
// Time Complexity – 
// If there are N numbers in a given array and Sum is the sum of all elements of the array. Then complexity will be
// O(N*log(Sum))


function verify(mid, array, n, K)
{   // mid =17;
    var sub_array = 0; // 1
    var sum = 0;
    for (var i = 0; i < n; i++) {

     
        if (array[i] > mid){
   				return false;
		}

        sum += array[i]; // sum = 10 {1,3,2,4} // sum = 10 {10} // sum = 8 {8} // sum = 6 {4,2}// sum = 8{5,3}

        if (sum > mid) {
            sub_array++;
            sum = array[i];
        }
    }
    sub_array++;

   
    if (sub_array <= K)
        return true;
    return false;
}


function splitArray(array, n, K)
{
    var max = array.reduce((a,b)=>Math.max(a,b)); // 10
    var start = max; //10
    var end = 0; 

    for (var i = 0; i < n; i++) {
        end += array[i]; 
    }
// end = 42
   
    var answer = 0;
    while (start <= end) {
        var mid = parseInt((start + end) / 2); // 26

      
        if (verify(mid, array, n, K)) {
            answer = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return answer;
}

var array = [1, 3, 2, 4, 10, 8, 4, 2, 5, 3];
var n = array.length;
var K = 4;
console.log(splitArray(array, n, K));