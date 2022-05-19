// * ZADATAK 
//   1. Napisati f-ju koja kao parametar dobija niz
//   2. Svakom clanu niza dodaje rec 'IZMENJENO'
//   3. Vraca nazad novi niz sa izmenjenim clanovima

//   Proveriti da li j f-ji prosledjen niz uz pomoc f-je Array.isArray(),
//   ako nije prosledjen niz, onda f-ja vraca kao vrednost prazan niz
   

// let niiz = ['jedan', 'dva', 'tri'];

// function mapirajNiz(niz){
//     let noviNiz = [];
//     for(let i = 0; i < niz.length; i++){
//     noviNiz.push(niz[i] + 'IZMENJENO');
//     }
//     return noviNiz;
// }
// console.log(mapirajNiz(niiz));

// * ZADATAK 
// ? 1. Napisati f-ju koja prima 2 parametra
// ? prvi parametar je od kog broja krece for petlja
// ? drugi parametar je do kog broja se krece for petlja
// ? 2. F-ja kao rezultat vraca zbir svih brojeva u tom zadatom opsegu
// ? PRIMER: 
// ? zbirOpsega(5,10)

// function zbir(odBroja, doBroja){
//     let rez = 0;
//     for( let i = odBroja; i <= doBroja; i++){
//         rez = rez + i
//     }
//     console.log(`Rezultat je ${rez}`)
//     return rez
// }
// zbir(5,10)

// * ZADATAK
// ? 1. Napisati f-ju koja kao parametar prima 2 niza iste duzine
// ? 2. U f-ji kreirati novi niz
// ? 3. Napisati for petlju koja prolazi kroz clanove ova 2 niza
//     i sabira ih prvi sa prvim, drugi sa drugim, itd.Napisati
//     taj zbir smesta u novi niz

let prviNiz = [1, 2, 3]
let drugiNiz = [4, 5, 6]
function sabiranje(prviNiz, drugiNiz){
    let noviNiz = []
    if(prviNiz.length === drugiNiz.length){
        for(let i = 0; i < drugiNiz.length; i++){
            let rez = prviNiz[i] + drugiNiz[i]
            noviNiz.push(rez)
        }
    }
    return noviNiz
}
 
console.log(sabiranje(prviNiz, drugiNiz))

