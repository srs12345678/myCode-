/*const array = [1, 2 , 3, 4, 5  ]   // array mean massiv and include current number
console.log(array)
*/
const inputElement = document.getElementById('title')
const creatBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value) - symbol `` mean use html code in js file, symbol  ${} mean use js code during  use``
creatBtn.onclick = function () {
    if (inputElement.value.length === 0){
        return
    }
       listElement.insertAdjacentHTML(
                'beforeend',
            `
            <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span>${inputElement.value}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li>
            `
       )
       inputElement.value = '' // before end  we clening value inputElement
}