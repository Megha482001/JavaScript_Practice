function pallindrome(num){
    if (num < 0) {
        return false;
    }
    let original = num;
    let reversed = 0;
    while (num > 0){
        let lastdigit = num % 10;
        reversed = (num * 10) + lastdigit;
        num = (num / 10) | 0;
    }
    console.log(original === reversed);
} pallindrome(123);