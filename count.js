function generateNumberPattern(num){
    for (i=1; i<=num; i++){
        let row='';
        for (j=1; j<=i; j++){
            row += i;
        }
    console.log(row)
    }
}

generateNumberPattern(5)
