function reverse(number){
    let reversenumber = 0;
    let numberlength = String(number).length;
    for (let i = 1; i <= numberlength; i++){
        let lastdigit = number % 10;
         reversenumber = reversenumber * 10 + lastdigit;
         number = Math.floor(number/10);
    } console.log(reversenumber);
} reverse(123);