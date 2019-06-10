function powerSet(i,n){
    if(i>n){
        let str = ''
        for(var j=1;j<=n;j++){
            if(set[j] == 1){
                str += j +' '
            }
        }
        console.log(i,str)
    }else{
        set[i]=1;powerSet(i+1,n);
        set[i]=0;powerSet(i+1,n);
    }
}

var n = 2;
var set = []
for(var i=0;i<5;i++){
    set[i] = 0
}
powerSet(1,n)