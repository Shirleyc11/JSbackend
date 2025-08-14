const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 9.1;
const notaQuartoBi = 7;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if ( media >= 7) {
    media += media * 0.1;
}

console.log(`a média é ${media.toFixed(1)}`);
