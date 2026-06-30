function findGcd(num1, num2){
    let gcd = 1;
    for (let i = 1; i < Math.min(num1,num2); i++) {
        if((num1,num2) % i === 0 ) {
            gcd = i;
        }
    }
    console.log(gcd);
} findGcd(12,8);