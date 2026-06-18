function pattern2(num){
    for (let i = 1; i <= num; i++){
        row = "";
        for (let j = 1; j <= i; j++){
            row += j;
        }console.log(row);
    }
}
pattern2(4);