function pattern(num){
  //  let num = 5;
    for (let i = 0; i < num; i++){
        let row= "";
    for(let j = 5; j < num; j++){
        row += "*";
    }
    console.log(row);
}

}
pattern(4);