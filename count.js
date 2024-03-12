// function generateNumberPattern(num){
//     for (i=1; i<=num; i++){
//         let row='';
//         for (j=1; j<=i; j++){
//             row += i;
//         }
//     console.log(row)
//     }
// }

// generateNumberPattern(5)

function count(num){
    for(i=1; i<=num; i++){
        patt = ""

        for(j=1; j<=i; j++){
           patt+= i
           
        }
    console.log(patt)
    }
}

count(5)