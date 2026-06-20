function pattern(num){
    for (let i = 1; i <= num; i++){
        row = "";
        for(let j = i;j <= num; j++){
            row += "*";
        } console.log(row);
    }
} pattern(5);

function pattern1(number){
    for (let i = number; i >= 1; i--){
        row = "";
        for(let j = 1; j <= i; j++){
            row += j;
        } console.log(row);
    }
}pattern1(5);