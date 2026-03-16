const namea=document.getElementById('name')
const empId=document.getElementById('empId')
const salary=document.getElementById('salary')
const dept=document.getElementById('dept')
const name1=document.getElementById('name1')
const empId1=document.getElementById('empId1')
const salary1=document.getElementById('salary1')
const dept1=document.getElementById('dept1')

const add=document.getElementById('add')

const addButton=document.getElementById('addemp')
addButton.addEventListener('click',() => {
     if (namea.value.trim() !== "") {
        name1.textContent = namea.value;
    } else {
        alert("Please enter a name!");
    }
});






