const headings=['FirstName','LastName','Address','Pincode','Gender ','State','Country']
const datas = []

const table = document.createElement('table');
const tablehead = document.createElement('thead');
const tablebody = document.createElement('tbody');
tablehead.setAttribute("id","thead")

table.appendChild(tablehead)
tablehead.append(...headingTag(headings))


function headingTag(data=[]){
const newArr=[]
for(i=0;i<data.length;i++){
const tCell = document.createElement('td')
tCell.innerText = headings[i]
newArr.push(tCell)
}
return newArr
}

function renderRow(data = {}) {
   const tableRow = document.createElement('tr');
   const values = Object.values(data);
   for(let i = 0; i < values.length; i++) {
      const tableCell = document.createElement('td');
      tableCell.innerText = values[i];
      tableRow.append(tableCell);
   }
   return tableRow;
}

function renderRows(data = []) {
   let rows = [];
   if(data.length > 0) {
     for(let i = 0; i < data.length; i++) {
        const item = renderRow(data[i]);
        rows.push(item);
     }
   }
   return rows;
} 

let data={}

function handleInput(e){

if(e.type=="text"){
console.log(e.value)
data[e.id] = e.value;

}else{
console.log(e.id)
data[e.name] = e.id
}

console.log(data)

}

function handleSubmit(){
if(Object.values(data)){
datas.push(data)
}else{
alert("blank")
}
refreshTable(datas)
}

function refreshTable(data=[]){
tablebody.innerHTML=' '
tablebody.append(...renderRows(datas))
table.appendChild(tablebody);
document.body.appendChild(table)
}
refreshTable(datas)






