function calculateResult() {
console.log("ijkj")
    let n = document.getElementById("number").value;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        let m = prompt("Enter subject " + i + " marks");
        total = total + Number(m);
    }

    let average = total / n;
    let grade;

    if (average >= 90) {
        grade = "A+";
    }
    else if(average >= 80) {
        grade = "A";
    }
    else if(average >= 70) {
        grade = "B";
    }
    else if(average >= 60) {
        grade = "C";
    }
    else if(average >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }
let res="";
    if (average > 40) {
        console.log("Pass");
        res="Pass";
    }
    else {
        console.log("Fail");
        res="Fail"
    }

    console.log("Total Marks:", total);
    console.log("Average:", average.toFixed(2));
    console.log("Grade:", grade);
    document.getElementById("result").innerHTML="Total marks="+total+"<br>"+"Average="+average+"<br>"
    +"grade="+grade+"<br>"+"Result="+res;
}