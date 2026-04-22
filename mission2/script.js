const salaryInput = document.getElementById("salaryInput");
const setSalaryBtn = document.getElementById("setSalary");
const salaryDisplay = document.getElementById("salaryDisplay");

const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpense");
const expenseList = document.getElementById("expenseList");
const balanceDisplay = document.getElementById("balance");

let expenses = [];
let myChart;

let salary = 0;
setSalaryBtn.addEventListener("click", () => {
  const value = Number(salaryInput.value);

  if (value <= 0) {
    alert("Enter valid salary");
    return;
  }

  salary = value;

  salaryDisplay.textContent = `Salary: ₹${salary}`;

  // Save to localStorage
  localStorage.setItem("salary", salary);
  salaryInput.value="";
  renderExpenses();
  updateBalance();
  renderChart();
});

window.addEventListener("DOMContentLoaded", () => {
  const savedSalary = localStorage.getItem("salary");
  const savedExpenses = localStorage.getItem("expenses");

  if (savedSalary) {
    salary = Number(savedSalary);
    salaryDisplay.textContent = `Salary: ₹${salary}`;
  }
  if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
    renderExpenses();
    updateBalance();
  }
});


addExpenseBtn.addEventListener("click", () => {
  const name = expenseNameInput.value.trim();
  const amount = Number(expenseAmountInput.value);

  // Validation
  if (!name || amount <= 0) {
    alert("Enter valid expense details");
    return;
  }

  const expense = { name, amount };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses();
  updateBalance();
  renderChart();

  // Clear inputs
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
});

function renderExpenses() {
  expenseList.innerHTML = "";

  expenses.forEach((exp, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${exp.name} - ₹${exp.amount}
      <button onclick="deleteExpense(${index})">Remove</button>
    `;

    expenseList.appendChild(li);
  });
  renderChart();
}

function updateBalance() {
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const remaining = salary - totalExpenses;

  balanceDisplay.textContent = `₹${remaining}`;
}

function deleteExpense(index) {
  expenses.splice(index, 1);

  // update storage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses();
  updateBalance();
  renderChart();
}


function renderChart() {
    if (salary <= 0) return;
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = salary - totalExpenses;

  const ctx = document.getElementById("chart").getContext("2d");

  // destroy old chart before creating new
  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Expenses", "Remaining"],
      datasets: [{
        data: [totalExpenses, remaining],
        backgroundColor: ["#ef4444", "#22c55e"]
      }]
    }
  });
}