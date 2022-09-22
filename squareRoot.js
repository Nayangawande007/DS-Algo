// Given a positive number n and precision p, find the square root of the number upto decimal places using binary search. 
// Examples: 
// Input : number = 50, precision = 3
// Output : 7.071
// Input : number = 10, precision = 4
// Output : 3.1622


//Answer------>

//Javascript program implementation to find 
//square root of given number
//upto given precision using
//binary search

function squareRoot(number, precision){
    let start = 0 ;
    let end = number;
    let mid;

    //variable to store the answer
    let ans = 0.0;

    //for computing integral part
    //of square root of number
    while (start <= end){
        mid = (start + end) / 2 ;

        if(mid * mid == number){
            ans = mid;
            break;
        }

        //increment start if integral
        //part lies on right side of the mid
        if(mid * mid < number){
            start = mid + 1;
            ans = mid;
        }


        //decrementing end if integral part
        //lies on the left side of the mid

        else{
            end = mid - 1;
        }
    }
        
        //console.log('answer', ans)
        //For computing the fractional part
        //of square root upto given precision
        let increment = 0.1;
        for(let i = 0 ; i < precision ; i++){
            while(ans * ans <= number){
                ans += increment;
            }

        // loop terminates when ans * ans > number
        ans = ans - increment;
        increment = increment / 10;
        }

        return ans.toFixed(precision);
}

console.log(squareRoot(24,4))
