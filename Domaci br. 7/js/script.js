// * ZADATAK 1:
/**
 * 
 * Kreirati klasu Phone koja ima sledece parametre:
 * ? Model telefona (string)
 * ? Trajanje garancije (number)
 * ? Godina proizvodnje (number)
 * ? Trenutni procenat baterije (number)
 * 
 * Klasa treba da ima sledeće funckije:
 * ? Funckija turnOn() koja uključuje telefon i ispisuje "Telefon je uključen"
 * ? Funkcija turnOff() koja isključuje telefon i ispisuje "Telefon je isključen"
 * ? Setter koji menja trenutni procentar baterije 
 * ? Funkcija koja proverava da li je istekla garancija "Garancija ovog telefona je istekla" / "Garancija ovog telefona traje još"
 * 
 * 
 * ! USLOVI
 * 
 * ? Ako je telefon već upaljen i pokušamo da pozovemo opet funckiju turnOn() treba da se ispiše "Telefon je već uključen"
 * ? Ako je telefon isključen i pokušamo da pozovemo funkciju turnOff() treba da se ispiše "telefon je već isključen"
 * ? Ako je procenat baterije 0 i pokušamo da pozovemo funkciju turnOn() treba da se ispiše "baterija telefona je prazna"
 *  
 */

class Phone{
    constructor(model, garancija, godina, procenatBaterije){
        this.model = model
        this.garancija = garancija
        this. godina = godina
        this.procenatBaterije = procenatBaterije

        this.setTurnOn = false
        this.setTurnOff = true
    }
    turnOn(){
        if(this.setTurnOn && this.procenatBaterije != 0 && this.procenatBaterije > 10){
        console.log('Telefon je vec ukljucen')
        }
        else if(this.procenatBaterije === 0){
            console.log('Baterija telefona je prazna')
        }
        else {
            console.log('telefon je ukljucen')
            return this.setTurnOn = true
        }
    }
    turnOff(){
        if(this.setTurnOff === true){
            console.log('Telefon je iskljucen')
            return this.setTurnOff = true
        }
    else
    {
        console.log('Tlefon je vec iskljucen')
    }
}
proveraGarancije(){
    let currentYear = new Date().getFullYear
    if(this.godina + this.garancija - currentYear < 0){
        console.log('Garancija je istekla')
    }
    else {
        console.log('Garancija jos traje')
    }
}
set setProcenatBaterije(newProcenarBaterije){
    this.procenatBaterije = newProcenarBaterije
}
}

let phone1 = new Phone('xiaomi', 3, 2020, 25)
console.log(phone1)

phone1.turnOn()
phone1.turnOff()

phone1.turnOff()

phone1.proveraGarancije()

phone1.setProcenatBaterije = 5
phone1.turnOn()

phone1.procenatBaterije = 0
phone1.turnOn()