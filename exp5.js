let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("empId").value;
    let salary = Number(document.getElementById("salary").value);


    employees.push({ name, id, salary });

    // Clear the boxes for the next person
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";

    alert("Added!");
}

function displayEmployees() {
    let text = "<h3>Employee List:</h3>";
    
    for (let i = 0; i < employees.length; i++) {
        text += i + ". " + employees[i].name + " - $" + employees[i].salary + "<br>";
    }
    
    document.getElementById("output").innerHTML = text;
}

function totalSalary() {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    document.getElementById("output").innerHTML = "Total Salary = $" + total;
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "Average = $0";
        return;
    }

    let total = 0;
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    
    let avg = total / employees.length;
    document.getElementById("output").innerHTML = "Average Salary = $" + avg.toFixed(2);
}