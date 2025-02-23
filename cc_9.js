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
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000



