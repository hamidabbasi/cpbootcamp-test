function recursiveCount(n){
    if(n == 1){
        console.log(n)
        return 1;
    }
    else{
        console.log(n);
        recursiveCount(n - 1)
    }
};
(recursiveCount(5))