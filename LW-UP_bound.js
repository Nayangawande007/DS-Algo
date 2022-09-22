let lowerBound = (A,T) => {
    let N = A.length;
    let left = 0;
    let right = N;

    while( left < right ){
        let mid = Math.floor((left + right)/2);
        //console.log('left',left, "right:", right, "mid", mid)
        if(A[mid] < T){
            left = mid + 1;
        }
        else{
            right = mid;
        }
        //console.log('left==>',left, "right:==>", right, "mid==>", mid)
        //console.log('left==>',A[left], "right:==>", A[right], "mid==>", A[mid])
    }

    return left;
};

//console.log(lowerBound([2,6,7,8,9,10,10,12,13],7));


let UpperBound = (A,T) => {
    let N = A.length;
    let left = 0;
    let right = N;

    while( left < right ){
        let mid = Math.floor((left + right)/2);
        console.log('left',left, "right:", right, "mid", mid)
        console.log('value left==>',A[left], "right:==>", A[right], "mid==>", A[mid])
        console.log("");
        
        if(A[mid] > T){
            right = mid ;
        }
        else{
            left = mid + 1;
        }
        console.log('index left==>',left, "right:==>", right, "mid==>", mid)
        console.log('value left==>',A[left], "right:==>", A[right], "mid==>", A[mid])
        console.log("");
        console.log("");
    }

    return right;
};

console.log(UpperBound([2,6,7,8,9,10,10,12,13],10));