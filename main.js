

/*lista - azonos típusu változók tárolására*/

let lista = ["első", "második"]
console.log(lista[0])

lista[0] = "átírt első"
console.log(lista)

lista[10] = "tizenegyedik"
console.log(lista)
console.log(lista[5])

// elem hozzáadasa

lista.push("következő elem")
console.log(lista)

//utolsó elem eltávolítása
lista.pop()
console.log(lista)


const szam = 5;

const lista2 = [12,13,14,15]
console.log(lista2)

//a konstans egyszeru adatszerkezet esetén const-al való deklarációnál a konstans értékét nem lehet megváltoztatni
//egyszeru adatszerkezet: szöveg, szám, logikai 
//összetett adatszerkezet esetén const használatával az összetett adatszerkezet memóriacíme lesz állandó , az nem változtatható meg, de az egyes értékek megváltoztathatók
//összetett adatszerkezet: lista, objektum
// a listákat mindig constként definiáljuk
// az obejktum egy olyan összetett adatszerkezet amely kulcs értékpárokbol áll egységként tudunk vele kezelni összetartozo adathalmazokat, többnyire const-kéntdeclaráljuk, a memória területen lévőcíme lesz fix



const etel1 = {
    nev: "Kukorica pattogtatva",
    ar: 400
}

console.log(etel1.nev)
console.log(etel1.ar)

etel1.mennyiseg = 3 /*új kulcsot adok az objektumhoz*/
console.log(etel1)



const etel2 = {
    nev: "BBQ pizza",
    ar: 4200,
    meret: 45,
    mennyiseg: 2
}


const kutyaLista = [
    {
        nev: "Dézi",
        fajta: "pitbull",
        szin: "fekete",
        marmagassag: 34,
        szul_datum: 2020,
        szul_hely: "Budapest"
        },
        
    {
        nev: "Fruzsina",
        fajta: "keverék",
        szin: "tarka",
        marmagassag: 50,
        szul_datum: 2021,
        szul_hely: "Budapest"
    }
]


console.log(kutyaLista[0].szin)




// objektum létrehozás házi, 3 objektum, min 2 tulajdonság, mindegyik első elemét kiirni, vagy átlagéletkor kiirni, vagy mindenkinek a nevét







