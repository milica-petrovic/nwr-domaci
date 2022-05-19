// * 1. Napisati f-ju koja pronalazi najveci od 3 zadata broj
//   PRIMER: pronadjiNajveci(10, 6, 400), najveci broj je: 400

function pronadjiNajveci(prviBroj, drugiBroj, treciBroj){
    if(prviBroj > drugiBroj && prviBroj > treciBroj){
        console.log(`Najveci broj je: ${prviBroj}`)
    }
    else if(drugiBroj > prviBroj && drugiBroj > treciBroj){
        console.log(`Najveci broj je: ${drugiBroj}`)
    }
    else {
        console.log(`Najveci broj je: ${treciBroj}`)
    }
}
pronadjiNajveci(5,20,15)