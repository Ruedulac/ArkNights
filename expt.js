function drawExpt(n){
    var p1 = 1;
    var p2 = 1;
    if (n<= 50){
        p1 = 0.02;
        p2 = Math.pow(1-p1,n-1)*p1;
        expt = n*p2*p1;
    }
    else{
        p1 = 0.02;
        p2 = Math.pow(1-p1,49);
        for (i = 1;i <= n-50 ;i++){
            p1 = 0.02+0.02*i;
            p2 = (1-p1)*p2;
        }
        expt = n*p2*p1
    }

    return expt;
}
arr = arr.push

console.log(drawExpt(60))