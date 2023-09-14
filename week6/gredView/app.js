const dataExample = [
    {
      company: "Alfreds Futterkiste",
      chef: "Maria Anders",
      country: "Germany",
    },
    {
      company: "Centro comercial Moctezuma",
      chef: "Francisco Chang",
      country: "Mexico",
    },
    {
      company: "Ernst Handel",
      chef: "Roland Mendel",
      country: "Austria",
    },
    {
      company: "Island Trading",
      chef: "Helen Bennett",
      country: "UK",
    },
    {
      company: "Laughing Bacchus Winecellars",
      chef: "Voshi Tannamuri",
      country: "Canada",
    },
    
  ];


dataExample.forEach( el=> addToTable(el) )

function addToTable(el){ // company: "Alfreds Futterkiste",chef: "Maria Anders", country: "Germany",

  const table =document.getElementById('data') // data is tables

  table.appendChild( buildRow(el ) ); // add child element

}

function buildRow(el){
  const tr = document.createElement('tr'); //creat tag tr who include inner HTML
  tr.innerHTML=`
  <td>${el.company}</td>
  <td>${el.chef}</td>
  <td>${el.country}</td>
  `
  return tr;
  }

  

  
