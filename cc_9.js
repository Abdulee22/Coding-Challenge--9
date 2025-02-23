// Task 1: Creating an Employee Class //
class Employee { // Class       
constructor(name, id, department, salary) { 
this.name = name; // employee
this.id = id; // employee id
this.department = department; // department
this.salary = salary;} // salary
getDetails() {return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;}
calculateAnnualSalary() {return this.salary * 12;}}
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); // Expected output: 60000

// Task 2: Created Manager Class with Inheritance //
class Manager extends Employee { 
constructor(name, id, department, salary, teamSize) {
super(name, id, department, salary); 
this.teamSize = teamSize;}
getDetails() {return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;}
calculateBonus() {return this.calculateAnnualSalary() * 0.1;}}
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); // Expected output: 9600
    
// Task 3: Creating a Company Class //
class Company {
constructor(name) { 
this.name = name;
this.employees = [];}
addEmployee(employee) {
this.employees.push(employee);}
listEmployees() {this.employees.forEach(emp => console.log(emp.getDetails()));}}
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

// Task 4: Implementing a Payroll System //
Company.prototype.calculateTotalPayroll = function() {
return this.employees.reduce((total, emp) => total + (emp.salary * 12 + (emp instanceof Manager ? emp.calculateBonus() : 0)), 0);};
console.log(company.calculateTotalPayroll()); // Expected output: 165600 