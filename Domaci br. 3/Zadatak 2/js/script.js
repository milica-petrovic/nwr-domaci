// 2. Napisati f-ju u koju unosimo redom parametre opsegBrojeva(broj, start, end)
//    i koja ispisuje da li se broj nalazi u zadatom opsegu:
//    PRIMER: 
//    opsegBrojeva(5, 50, 100)
//    broj se ne nalazi u zadatom opsegu

function opsegBrojeva(broj, start, end){
    if(broj >= start && broj <= end){
        console.log(`Broj ${broj} se nalazi u zadatom opsegu`)
    }
    else{
        console.log(`Broj ${broj} se ne nalazi u zadatom opsegu`)
    }
}
opsegBrojeva(55,50,100)