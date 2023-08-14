//--- curent price 
const electst = document.getElementById('electSt')// curent price electr
const voterst = document.getElementById('voterSt')// curent price 
const voterHSt = document.getElementById('voterHSt')// curent price
const interSt = document.getElementById('interSt')// curent price 
const musorSt = document.getElementById('musorSt')// curent price
// btm
const submitTr = document.getElementById('submitTarif')


submitTr.onclick = ()=> {
    alert('Дождитесь полной  загрузки страницы')
    localStorage.setItem('price_el', electst.value)
    localStorage.setItem('price_wot', voterst.value)
    localStorage.setItem('price_wotH', voterHSt.value)
    localStorage.setItem('price_inter', interSt.value)
    localStorage.setItem('price_trash', musorSt.value)
    }
 
// перенести элементы 
