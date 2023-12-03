let empName = document.getElementById("empName");
let position = document.getElementById("position");
let inputSalary = document.querySelectorAll(".inputSalary input");
let department = document.getElementById("department");
let empCount = document.getElementById("count");
let creatBtn = document.getElementById("creatBtn");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let tbody = document.getElementById("tbody");
let empCounter = document.getElementById("empCounter");
let employees;
let model = document.getElementById("model");
let golbalID;
let mood = "create";
if (localStorage.length == 0) {
  employees = [];
} else {
  employees = JSON.parse(localStorage.Emp);
}
/*====================
    Calc Salary
==================*/
let getSalary = () => {
  let gross = inputSalary[0].value;
  let tax = inputSalary[1].value;
  let tranCost = inputSalary[2].value;
  let bonus = inputSalary[3].value;
  let taxCost = +gross * (tax / 100);
  let salaryAfterTax = +gross - +taxCost;
  let salaryAfterTranCost = +salaryAfterTax - +tranCost;
  let total = +salaryAfterTranCost + +bonus;
  inputSalary[4].value = total;
  let empCounter = document.getElementById("empCounter");
};
// add event onInput to every inputSalary
for (let i = 0; i < inputSalary.length; i++) {
  inputSalary[i].addEventListener("input", getSalary);
}
/*====================
   Employees count
==================*/
let employeeCounter = () => {
  empCounter.innerHTML = employees.length;
};
employeeCounter();
/*================================
    Check Empty to display deleteAllBtn
=================================*/
let checkEmpty = () => {
  if (tbody.childElementCount != 0) {
    deleteAllBtn.classList.remove("d-none");
  } else {
    deleteAllBtn.classList.add("d-none");
  }
};
checkEmpty();
/*================================
    Create an object of employee
=================================*/
let createEmpObject = () => {
  let newEmployee = {
    employeeName: empName.value,
    employeePosition: position.value,
    gross: inputSalary[0].value,
    tax: inputSalary[1].value,
    tranCost: inputSalary[2].value,
    bonus: inputSalary[3].value,
    total: inputSalary[4].value,
    department: department.value,
    empCount: empCount.value,
  };
  if (mood == "create") {
    if (newEmployee.empCount <= 1) {
      employees.push(newEmployee);
    } else {
      for (let x = 0; x < newEmployee.empCount; x++) {
        employees.push(newEmployee);
      }
    }
  } else {
    mood = "create";
    employees[golbalID] = newEmployee;
    empCount.classList.remove("d-none");
    creatBtn.innerHTML = `Add New Employee`;
    creatBtn.classList.replace("btn-warning", "btn-info");
  }
  localStorage.setItem("Emp", JSON.stringify(employees));
  showData();
  employeeCounter();
  checkEmpty();
  reset();
};
creatBtn.addEventListener("click", createEmpObject);
/*================================
    reset All Data
=================================*/
let reset = () => {
  empName.value = "";
  position.value = "";
  inputSalary[0].value = "";
  inputSalary[1].value = "";
  inputSalary[2].value = "";
  inputSalary[3].value = "";
  inputSalary[4].value = "";
  department.value = "";
  empCount.value = "";
};
/*====================
    Delete All data
==================*/
let deleteAll = () => {
  localStorage.clear();
  employees.splice(0);
  showData();
};
deleteAllBtn.addEventListener("click", deleteAll);
/*================================
    Show data of Employees
=================================*/
let showData = () => {
  let tableRow = "";
  for (let j = 0; j < employees.length; j++) {
    tableRow += `<tr>
                      <td>${j + 1}</td>
                      <td>${employees[j].employeeName}</td>
                      <td>${employees[j].employeePosition}</td>
                      
                      <td><i onclick="removeOne(${j})" class="text-danger fs-4 fa-solid fa-trash-can"></i></td>
                      <td><i onclick="update(${j})" class="text-warning fs-4 fa-solid fa-pen-to-square"></i></td>
                      <td><i onclick="showOne(${j})" class="fa-solid fa-eye fs-4"></i></td>
                   </tr>`;
  }
  tbody.innerHTML = tableRow;
  employeeCounter();
  checkEmpty();
};
showData();
/*================================
    remove one employee
=================================*/
let removeOne = (j) => {
  employees.splice(j, 1);
  localStorage.Emp = JSON.stringify(employees);
  showData();
};
/*================================
    Update Information of Employee
=================================*/
let update = (j) => {
  golbalID = j;
  mood = "update";
  empName.value = employees[j].employeeName;
  position.value = employees[j].employeePosition;
  inputSalary[0].value = employees[j].gross;
  inputSalary[1].value = employees[j].tax;
  inputSalary[2].value = employees[j].tranCost;
  inputSalary[3].value = employees[j].bonus;
  inputSalary[4].value = employees[j].total;
  department.value = employees[j].department;
  empCount.classList.add("d-none");
  creatBtn.innerHTML = `Update Emplyee Number: ${j + 1}`;
  creatBtn.classList.replace("btn-info", "btn-warning");
};
/*================================
    Show One Employee information
=================================*/
let showOne = (j) => {
  model.style.display = "flex";
  model.innerHTML = `<div class="card">
  <div class="card-header">${employees[j].employeeName}</div>
  <div class="card-body">
    <h5 class="card-title">Employee: ${employees[j].employeeName}</h5>
    <hr>
    <h5 class="card-title">Position: ${employees[j].employeePosition}</h5>
    <hr>
    <h5 class="card-title">Gross: ${employees[j].gross}</h5>
    <hr>
    <h5 class="card-title">Tax: ${employees[j].tax}%</h5>
    <hr>
    <h5 class="card-title">TranCost: ${employees[j].tranCost}</h5>
    <hr>
    <h5 class="card-title">Bonus: ${employees[j].bonus}</h5>
    <hr>
    <h5 class="card-title">Total: ${employees[j].total}</h5>
    <hr>
    <h5 class="card-title">Department: ${employees[j].department}</h5>
    <hr>
  </div>
</div>`;
};
model.addEventListener("click", function () {
  model.style.display = "none";
});
