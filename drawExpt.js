function drawExpt(n){
    var p1 = 1;
    var p2 = 1;
    if (n<= 50){
        p1 = 0.02;
        p2 = Math.pow(1-p1,n-1);
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

function aveExpt(n){
    var ave = 0;
    var exptArray = [];
    var pArray = [];
    for(var i=1;i<=n;i++){
        exptArray.push(drawExpt(i));
        p = parseFloat(drawExpt(i)/i).toFixed(12);
        pArray.push(p);
        ave = ave+exptArray[i-1];
    }
    console.log(pArray);
    console.log(pArray.sort());
    return ave;
}

console.log(aveExpt(99))


