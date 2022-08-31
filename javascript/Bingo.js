


const btn = document.querySelector(".table__button");
const sectionOne = document.querySelector(".rowOne");
const sectionTwo = document.querySelector(".rowTwo");
const sectionThre = document.querySelector(".rowThre");

let table = [
    { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' },
    { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' },
    { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' },
]

const random = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
/*Se encarga de chequear que los números anteriores no sean mayores
dependiendo la posición
*/
const check = (pos, num, num1, num2) => {

    if (pos === 1) {
        do {
            table[pos][num] = random(num1, num2)

        } while (table[0][num] >= table[pos][num])

    }
    else if (pos === 2) {
        
        do {
            table[pos][num] = random(num1, num2)
            
        } while (table[pos][num]<= table[0][num]  || table[pos][num]<= table[1][num] )

    }
    else table[pos][num] = random(num1, num2)
}
/* Dependiendo la posición de la columna llenará
con un número ; por ej.: en la columna 1(case 1) llena con números del 1 al 9
columna 2 (case 2) llena con números del 10 al 19
 */
const fillTable = (numbersRandom, pos) => {

    numbersRandom.forEach((num) => {
        switch (num) {
            case 1: {
                pos === 0?check(pos, num, 1, 3):(pos===1?check(pos,num,1,6):check(pos,num,1,9));
                break;
            }
            case 2: {
                pos === 0?check(pos, num, 10, 13):(pos===1?check(pos,num,10,16):check(pos,num,10,19));
                break;
            }
            case 3: {
                pos === 0?check(pos, num, 20, 23):(pos===1?check(pos,num,20,26):check(pos,num,20,29));
                break;
            }
            case 4: {
                pos === 0?check(pos, num, 30, 33):(pos===1?check(pos,num,30,36):check(pos,num,30,39));
                break;
            }
            case 5: {
               pos === 0?check(pos, num, 40, 43):( pos===1?check(pos,num,40,46):check(pos,num,40,49));
                break;
            }
            case 6: {
              pos === 0?check(pos, num, 50, 53):(pos===1?check(pos,num,50,56):check(pos,num,50,59));
                break;
            }
            case 7: {

                pos === 0?check(pos, num, 60, 63):(pos===1?check(pos,num,60,66):check(pos,num,60,69));
                break;
            }
            case 8: {

                pos === 0?check(pos, num, 70, 73):(pos===1?check(pos,num,70,76):check(pos,num,70,79));
                break;
            }
            case 9: {
                pos === 0?check(pos, num, 80, 83):( pos===1?check(pos,num,80,86):check(pos,num,80,90));
                break;
            }
        }


    })

}

const printTable = () => {
    sectionOne.innerHTML = '';
    sectionTwo.innerHTML = '';
    sectionThre.innerHTML = '';

    for (const atri in table[0]) {
        const art = document.createElement("div")
        art.className = 'numRow'
        art.innerHTML = `${table[0][atri]}`
        sectionOne.append(art)
    }

    for (const atri in table[1]) {
        const art = document.createElement("div")
        art.className = 'numRow'
        art.innerHTML = `${table[1][atri]}`
        sectionTwo.append(art)
    }
    for (const atri in table[2]) {
        const art = document.createElement("div")
        art.className = 'numRow'
        art.innerHTML = `${table[2][atri]}`
        sectionThre.append(art)
    }


}   
const generateDifferentNumber = () => {
    let different = false;
    let numRandom;
    while (!different) {
        const nums = [];
        let cont = 0
        for (let i = 0; i < 5; i++) {
            let index = Math.floor(Math.random() * 9) + 1
            nums.push(index);
        }
        nums.forEach((elem) => {
            nums.forEach((num) => {
                elem === num ? cont++ : '';
            })
        })
        cont === 5 && (different = true, numRandom = nums);
    }

    return numRandom

}
/* Genera indicies para los números de la segunda fila
y exige que al menos sean cuatro posiciones distintas a
la fila anterior, para así poder corroborar que haya
por lo menos un número por columna, como lo pide en la consigna
 */
const generateSecondRow = (row1) => {
    let cont;
    const arrayNumbersRow1 = row1;
    arrayNumbersRow1.length = 4;
    do {
        cont = 0;
        arraySameNumbers = generateDifferentNumber();
        arrayNumbersRow1.forEach((elem) => {
            arraySameNumbers.forEach((num) => {
                elem === num && cont++
            })
        })

    } while (cont > 0)
    return arraySameNumbers
}
/*Genera índices para los números de la tercer fila, comprobando
que en los lugares anteriores de la columna no haya dos numeros, ya que
uno de los puntos indica que solo puede haber 1 o 2 números por columna
 */
const generateThirdRow = () => {
    let cont;
    let arraySameNumbers;
    do {
        cont = 0;
        const arrayAcum= [];
        arraySameNumbers = generateDifferentNumber();

        const oneArray = Object.values(table[0]);
        const twoArray = Object.values(table[1]);

        for (let i = 0; i < 10; i++) {
            if (oneArray[i] > 0 && twoArray[i] > 0) {
                arrayAcum.push(i + 1)
            }
        }
        arrayAcum.forEach((elem) => {
            arraySameNumbers.forEach((num) => {
                elem === num && cont++
            })
        })

    } while (cont > 0)
    return arraySameNumbers
}


/* Función general para generar tablero de bingo */
const generateTable = () => {
    table = [
        { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' },
        { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' },
        { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' },
    ];
    const row1 = generateDifferentNumber();
    fillTable(row1, 0);
    const row2 = generateSecondRow(row1);
    fillTable(row2, 1);
    const row3 = generateThirdRow();
    fillTable(row3, 2);
    printTable();

}

btn.addEventListener('click', generateTable);



