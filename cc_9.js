//Task 1

class Employee {
    constructor(name, id, department, salary) {
        // Initializing employee properties
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    
    getDetails() { //Return formatted String with details about employees
        return `Employee Name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    }

    calculateAnnualSalary() { //Calculates annual salary
        return this.salary * 12;
    }

}


const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee Name: Alice Johnson, ID: 101, Department: Sales, Salary: 5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000


//Task 2

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); //Calling parent class constructor
        this.teamSize = teamSize;

    }

getDetails() { //Includes the size of team
    return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
}

calculateBonus() { //calculates 10% of annual salary as bonus
    return this.calculateAnnualSalary() * 0.1;
}
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: 8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600


//Task 3

class Company{
    constructor(name) {
        this.name = name;
        this.employee = [];
    }

    addEmployee(employee) { //Adds employee to the company
        this.employee.push(employee);
    }

    listEmployees() { //Lists all employees in the company
        this.employee.forEach(emp => console.log(emp.getDetails()));
    }
}

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee Name: Alice Johnson, ID: 101, Department: Sales, Salary: 5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: 8000, Team Size: 5"


//Task 4

Company.prototype.calculateTotalPayroll = function() { //Calculates total payroll of the company
    return this.employee.reduce((total, emp) => {
        let annualSalary = emp.calculateAnnualSalary();
        if (emp instanceof Manager) {
            annualSalary += emp.calculateBonus();
        }
        return total + annualSalary;
    }, 0);
}

console.log(company.calculateTotalPayroll()); 
// Expected output: 165600 (assuming emp1 and mgr1 salaries)


//Task 5

Company.prototype.promoteToManager = function(employee, teamSize) { //finds manager in array and promotes employee to manager
    const index = this.employee.indexOf(employee);
    if (index !== -1) {
        this.employee[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    }
}

company.promoteToManager(emp1, 3);
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"


