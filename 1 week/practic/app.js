/*
/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
/*
let name = 'Roman'
let sName = 'sName'
let profession = 'lower'

 //const data = 'My name is '+ name+ ' ' + sName+ ', my profession '+ profession


//console.log(data)


function show (a,b,c) {
    a
    b 
    c 
    console.log('My name is '+ a+ ' ' + b+ ', my profession '+ c +'.')
}

show('roman','Sh','lower' )

*/
//------------------------------------------------


/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */
/*
const data = {
    a: ' ',
    b: 1,
    c: true,
    d: null,
    i: {},
    f: ['1',[2],[3]]
}


console.log(typeof(data.a))
console.log(typeof(data.b))
console.log(typeof(data.c))
console.log(typeof(data.d),(data.d))
console.log(typeof(data.i),(data.i))
console.log(typeof(data.f), (data.f))

*/
//----------------------------------------------------------------

/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */
/*

function showName (a) {
console.log("привет "+a)
}

showName('Roman')
*/
//----------------------------------------------------------



/** ЗАДАЧА 10 - Комментарий перед функцией
 *
 * 1. Объявите функцию с двумя параметрами, значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и вторым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией:
 *  - Текст комментария "Возвращает разницу двух чисел"
 *  - Укажите тип параметров - number
 *  - Укажите тип возвращаемого значения - number
 *  - Опишите возвращаемое значение - "Разница чисел"
 *
 * 4. Вызовите функцию
 */
/*

function data (a,b){ // return value a -b 
    let raznitca = Number (a - b)
    return raznitca
}
 data(-2,2)
*/
//--------------------------------------------------------

/** ЗАДАЧА 11 - Колбэк функция
*
* 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
*
* 2. Используйте стрелочную функцию
*/
/*
 function show (a){
    console.log('Hello word'+',а особенно тебе '+a)
 }


 show ('Roman')

//---------------------------------------------
/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */
/*
function show (a,b,c){
   console.log('my name is'+' '+a+" "+b+" "+'and my favorite name is'+' '+c)
} 

show('Roman','Sh','Rom')
// or
const show ={ 
    a: 'Roman',
    b: 'Sh',
    c: 5
 }

 const showShow = 'my name is'+' '+show.a+" "+show.b+" "+'and my favorite name is'+' '+show.c

console.log(showShow )
*/
//----------------------------------

/** ЗАДАЧА 13 - Длина строки
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Виведите в консоль длину этой строки
 */

/*



let a = 'Hi russia '
console.log('Выражение '+'"'+ a+'"'+' имеет длину '+a.length+ " символов."
)

*/

//----------------------------------------
/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 * 
 */
const myFavoriteSeason = 'summer'
const myFavoriteSeason1 = myFavoriteSeason


console.log(myFavoriteSeason instanceof String)
console.log(myFavoriteSeason instanceof myFavoriteSeason1)


console.log(typeof myFavoriteSeason)

const seasonToUpperCase = myFavoriteSeason.toUpperCase()

console.log(seasonToUpperCase)

// // СОЗДАНИЕ ЭКЗЕМПЛРЯРА String
// const myString = new String('Bogdan')
// console.log(myString instanceof String)
// console.log(typeof myString)
// console.log(myString.toUpperCase())