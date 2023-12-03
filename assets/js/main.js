// let empName = document.getElementById("empName");
// let position = document.getElementById("position");
// //let gross = document.getElementById("gross");
// //let tax = document.getElementById("tax");
// //let tranCost = document.getElementById("tranCost");
// //let bonus = document.getElementById("bonus");
// //let total = document.getElementById("total");
// let department = document.getElementById("department");
// let count = document.getElementById("count");
// let creatBtn = document.getElementById("creatBtn");
// let tbody = document.getElementById("tbody");
// let inputSalary = document.querySelectorAll(".inputSalary input");
// let deleteAllBtn = document.getElementById("deleteAllBtn");
// let empCount = document.getElementById("empCount");
// let mood = "create";
// let globaId;
// let empArray;
// if (localStorage.length == 0) {
//   empArray = [];
// } else {
//   empArray = JSON.parse(localStorage.Employee);
// }
// // employees count
// let employeesCount = () => {
//   empCount.innerHTML = empArray.length;
// };
// employeesCount();
// // Calc salary
// let calcSalary = () => {
//   let gross = inputSalary[0].value;
//   let tax = inputSalary[1].value;
//   let tranCost = inputSalary[2].value;
//   let bonus = inputSalary[3].value;
//   let taxCost = +gross * (tax / 100);
//   let salaryAfterTax = +gross - +taxCost;
//   let salaryAfterTranCost = +salaryAfterTax - +tranCost;
//   let netSalary = +salaryAfterTranCost + +bonus;
//   inputSalary[4].value = netSalary;
// };
// // add event oninput to show total salary
// for (let i = 0; i < inputSalary.length; i++) {
//   inputSalary[i].addEventListener("input", calcSalary);
// }
// // create object of employees
// let createEmp = () => {
//   let empObject = {
//     empName: empName.value,
//     position: position.value,
//     gross: inputSalary[0].value,
//     tax: inputSalary[1].value,
//     tranCost: inputSalary[2].value,
//     bonus: inputSalary[3].value,
//     total: inputSalary[4].value,
//     department: department.value,
//     count: count.value,
//   };
//   if (mood == "create") {
//     if (empObject.count <= 1) {
//       empArray.push(empObject);
//     } else {
//       for (let x = 0; x < empObject.count; x++) {
//         empArray.push(empObject);
//       }
//     }
//   } else {
//     mood = "create";
//     empArray[globaId] = empObject;
//     count.classList.remove("d-none");
//     creatBtn.innerHTML = `Add New Employee`;
//     creatBtn.classList.replace("btn-warning", "btn-info");
//   }
//   localStorage.setItem("Employee", JSON.stringify(empArray));
//   showData();
//   employeesCount();
// };
// creatBtn.addEventListener("click", createEmp);
// // show data
// let showData = () => {
//   let tableRow = "";
//   for (let j = 0; j < empArray.length; j++) {
//     tableRow += `<tr>
//                         <td>${j + 1}</td>
//                         <td>${empArray[j].empName}</td>
//                         <td>${empArray[j].position}</td>
//                         <td>${empArray[j].gross}</td>
//                         <td>${empArray[j].tax}</td>
//                         <td>${empArray[j].tranCost}</td>
//                         <td>${empArray[j].bonus}</td>
//                         <td>${empArray[j].total}</td>
//                         <td>${empArray[j].department}</td>
//                         <td><i onclick="deleteOne(${j})" class="fa-solid fa-trash-can text-danger"></i></td>
//                         <td><i onclick="update(${j})" class="fa-solid fa-pen-to-square text-warning"></i></td?

//                    </tr>`;
//   }
//   tbody.innerHTML = tableRow;
//   //
//   if (tbody.childElementCount == 0) {
//     deleteAllBtn.style.display = "none";
//   } else {
//     deleteAllBtn.style.display = "block";
//   }
//   employeesCount();
// };
// showData();
// // Delete All Employee
// let deleteAll = () => {
//   localStorage.clear();
//   empArray.splice(0);

//   showData();
// };
// deleteAllBtn.addEventListener("click", deleteAll);
// // delete One Employee
// let deleteOne = (j) => {
//   empArray.splice(j, 1);
//   localStorage.Employee = JSON.stringify(empArray);
//   showData();
//   employeesCount();
// };
// // Update data
// let update = (j) => {
//   mood = "update";
//   globaId = j;
//   empName.value = empArray[j].empName;
//   position.value = empArray[j].position;
//   inputSalary[0].value = empArray[j].gross;
//   inputSalary[1].value = empArray[j].tax;
//   inputSalary[2].value = empArray[j].tranCost;
//   inputSalary[3].value = empArray[j].bonus;
//   inputSalary[4].value = empArray[j].total;
//   department.value = empArray[j].department;
//   count.classList.add("d-none");
//   creatBtn.innerHTML = `Update Employee Number : ${j + 1}`;
//   creatBtn.classList.replace("btn-info", "btn-warning");
// };
//================================================
//================================================
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
