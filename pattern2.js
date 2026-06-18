function pattern1(num){
    for(let i = 1; i <= num; i++){
        let row = "";
        for(let j = 1; j <= i; j++){
            row += "* ";
        }
       // let row = "* ".repeat(i + 1);
        console.log(row);
    }
}
pattern1(5);