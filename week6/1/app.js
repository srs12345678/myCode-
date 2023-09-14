
//Hi frend  . all done 


let all = document.getElementsByTagName('tr')
let arr=[]


function parsData(tr){//  or add in [{num:...,name:...}]
    if (tr.querySelector('.code')!==null) {
            JSON.stringify( arr.push([
            tr.querySelector('.rchars').innerText,
            tr.querySelector('.code').innerText,
            tr.querySelector('.chars').innerText,
            tr.querySelector('.name').innerText,
            
                ]))
            }

        return 'стоп';
   
}

[...all].forEach(el=>parsData(el))

