// * ZADATAK 1
// ? Mapirati niz tako da kod svih polaznika 
// ? koji imaju manje od 50 score name bude 'IZBACEN'
// ? Novi mapirani niz odstampati kroz document.write
// ? na stranici kao listu


// let polaznici = [
//     {
//         name: 'Milica Petrovic',
//         score: 90
//     },
//     {
//         name: 'Lazar Dinic',
//         score:30
//     },
//     {
//         name: 'Ilic Zorana',
//         score: 50
//     }
// ]
// let niz = polaznici.map(polaznik =>{
//     if(polaznik.score < 50){
//         return{
//             name: 'IZBACEN',
//             score: polaznik.score
//         }
//     }else{
//         return polaznik
//     }
// }) 

// niz.forEach(polaznik=>{
//     document.write(`<li>${polaznik.name}</li>`)
// })


// * ZADATAK 2
// ? Zadati niz mapirati tako da name za svakog polaznika 
// ? bude napisan velikim slovima
// ? POMOC: potraziti funkciju za konvertovanje stringa u velika slova 
// ? REZULTAT: ['MILICA PETROVIC', 'LAZAR DINIC']

// let polaznici = ['Milica Petrovic', 'Lazar Dinic']

// let niz = polaznici.map(elementPolaznici =>{
//     return elementPolaznici.toUpperCase()
// })
// console.log(niz)




// * ZADATAK 3
// ? Zadati niz mapirati tako da novi niz ne bude niz objekata 
// ? nego niz name stringova
// ? REZULTAT: ['Milica Petrovic', 'Lazar Dinic']

// let polaznici = [
//     {
//         name: 'Milica Petrovic',
//         age: 23
//     },
//     {
//          name: 'Lazar Dinic',
//         age: 26
//     }
// ]
// let niz = polaznici.map((elementNiza) => {
//     return Object.values(elementNiza)[0]
// })
// console.log(niz)

// * ZADATAK 4
// ? Mapirati niz brojeva tako da dobijemo novi niz
// ? brojeva koji su pomnozeni brojem 2
// ? PRIMER: [1,2,3,4]
// ? REZULTAT: [2,4,6,8]

// let niz = [1,2,3,4]

// let niz2 = niz.map((broj) =>{
//     return broj*2
// })

// console.log(niz2)


// * ZADATAK 5
// ? Mapirati niz brojeva tako da dobijemo niz stringova
// ? PRIMER: [1,2,3,4]
// ? REZULTAT: ['1','2','3','4']
// ? POMOC: Potraziti f-ju za konvertovanje u string


let niz = [1,2,3,4]

let niz2 = niz.map((broj) =>{
    return broj.toString()
})

console.log(niz2)