// * 3. Napisati f-ju koja kao parametar prima broj i proverava:
//      - Da li je ono sto je uneto broj,a zatim proverava da li je taj broj paran 
//      - Ako nije broj, ispisuje se 'UNETA VREDNOST NIJE BROJ'
//      - Ako je paran broj, ispisuje se 'UNETA VREDNOST JE BROJ'
//      - Ako je neparan broj ispisuje se 'UNETA VREDNOST JE NEPARAN BROJ'

function funkcija(broj){
    if(typeof broj != 'number'){
        console.log('Uneta vrednost nije broj')
    }
    else if(broj % 2 == 0){
        console.log('Uneta vrednost je broj')
    }
    else{
        console.log('Uneta vrednost je neparan broj')
    }
}

funkcija(5)