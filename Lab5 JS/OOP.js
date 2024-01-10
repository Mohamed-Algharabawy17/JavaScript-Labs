//================================================ Class Person ===========================================================

class Person 
{
    constructor(fName, money, workMood, isManager) 
    {
        this.fName = fName;
        this.money = money;
        this.workMood = workMood;
        this.isManager = isManager;
        this.healthRate = 100;
    }

    sleep(hours) 
    {
        if (hours === 7) {
            this.workMood = 'happy';
        } else if (hours < 7) {
            this.workMood = 'tired';
        } else {
            this.workMood = 'lazy';
        }
    }

    eat(meals) 
    {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else {
            this.healthRate = 50;
        }
    }

    Buy(items) 
    {
        items *= 10;
        this.money -= items;
    }
}

//================================================ Class Employee ===========================================================

class Employee extends Person 
{
    constructor(fName, id, email, workMood, salary, isManager) 
    {
        super(fName, 0, workMood, isManager);
        this.id = id;
        this.email = email;
        this._salary = salary;
    }

    set salary(value) 
    {
        this._salary = value;
        if (value < 1000) {
            this._salary = 1000;
        }
    }

    get salary() 
    {
        return this._salary;
    }

    work(hours) 
    {
        if (hours === 8) {
            this.workMood = 'happy';
        } else if (hours > 8) {
            this.workMood = 'tired';
        } else {
            this.workMood = 'lazy';
        }
    }
}

//================================================ Class Office ============================================================

class Office 
{
    constructor(name) 
    {
        this.name = name;
        this.employees = [];
    }

    getAllEmployees() 
    {
        return this.employees;
    }

    getEmployee(empId) 
    {
        const employee = this.employees.find(emp => emp.id === empId);
        if (employee) 
        {
            if (employee.isManager) 
            {
                return {
                    fName:employee.fName,
                    id: employee.id,
                    email: employee.email,
                    isManager: true,
                    workMood: employee.workMood,
                    healthRate: employee.healthRate,
                };
            } 
            else 
            {
                return employee;
            }
        } 
        else 
        {
            console.log(`Employee with ID ${empId} not found.`);
        }
    }

    hire(emp) 
    {
        this.employees.push(emp);
    }

    fire(empId) 
    {
        const index = this.employees.findIndex(emp => emp.id === empId);
        if (index !== -1) 
        {
            this.employees.splice(index, 1);
            console.log(`Employee with ID ${empId} has been fired.`);
        } 
        else 
        {
            console.log(`Employee with ID ${empId} not found.`);
        }
    }
}

//====================================================== User Menu ==============================================================

const office = new Office("Gharabawy's Company");
let choice;

while (choice !== '5') {
    choice = prompt('\t\t\t\t\t\t\t\t\t\t\t\t Welcome to our app \t\t\t\t\t\t\t\t\t\t\t\t\nPlease choose option\n1) Add New Employee\n2) Display all Employees\n3) Display specific Employee details\n4) Delete Employee\n5) Quit');

    switch (choice) 
    {
        case '1':
            Add();
            break;
        case '2':
            displayAll();
            break;
        case '3':
            displayInfo();
            break;
        case '4':
            fire();
            break;
        case '5':
            alert("Quitting the application\nThanks for using our app :)")
            break;
        default:
            console.log('Invalid Option !');
            break;
    }
}


//=============================================== Function add new emp ===========================================================

function Add() 
{
    var Name;
    while (true) 
    {
        Name = prompt('Enter Employee Full Name: ');
        if (/^[A-Za-z\s]+$/.test(Name)) {
            break;
        } else {
            console.log('Invalid name! Please enter only alphabets and spaces.');
        }
    }

    var Email;
    while (true) 
    {
        Email = prompt('Enter Employee Email: ');
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}/.test(Email)) 
        {
            break;
        } 
        else 
        {
            console.log('Invalid email format! Please enter a valid email address.');
        }
    }

    var Id;

    while (true) 
    {
        Id = prompt('Enter Employee ID: ');
        const existingEmployee = office.getAllEmployees().find(e => e.id == Id);
        if (!existingEmployee) 
        {
            break;
        } 
        else 
        {
            console.log(`Employee with ID ${Id} already exists, Please choose a different ID !`);
        }


        if (/^\d+$/.test(Id)) 
        {
            break;
        } 
        else 
        {
            console.log('Invalid ID! Please enter only numbers');
        }


    }

    var Salary;
    while (true) 
    {
        Salary = prompt('Enter Employee Salary: ');
        if (/^\d+$/.test(Salary) && parseInt(Salary) >= 1000) 
        {
            break;
        } 
        else 
        {
            console.log('Invalid salary! Please enter only number greater than or equal to 1000 !');
        }
    }

    const isManager = confirm('Do yo need to be manager?');
    const newEmployee = new Employee(
        Name,
        Id,
        Email,
        'happy',
        parseFloat(Salary),
        isManager
    );

    var sleepHours = parseInt(prompt('Enter sleep hours:'));
    newEmployee.sleep(sleepHours);

    var workHours = parseInt(prompt('Enter work hours:'));
    newEmployee.work(workHours);

    var eatMeals = parseInt(prompt('Enter number of meals eaten:'));
    newEmployee.eat(eatMeals);

    office.hire(newEmployee);
    alert(`Employee ${Name} added successfully :)`);
}

//============================================== Function display all employees ===================================================

function displayAll() 
{
    const allEmployees = office.getAllEmployees();
    console.log('All Employees: ');
    allEmployees.forEach(emp => {
        console.log('ID: ', emp.id, 'Email: ', emp.email);
    });
}

//============================================== Function display specific employee ===============================================

function displayInfo() 
{
    const empId = prompt('Enter employee ID:');
    const emp = office.getEmployee(empId);
    if (emp) 
    {
        console.log('Employee Details:');
        console.log('Name: ', emp.fName);
        console.log('ID: ', emp.id);
        console.log('Email: ', emp.email);
        console.log('Work Mood: ', emp.workMood);
        console.log('Health Rate: ', emp.healthRate);
        if (emp.isManager) 
        {
          console.log('Manager: Yes');
        } 
        else 
        {
          console.log('Manager: No');
          console.log('Salary: ', emp.salary);
        }
    }
    else 
    {
        console.log('Employee not found.');
    }
}

//=================================================== Function delete Emp =======================================================

function fire() 
{
    var empID = prompt("Enter employee ID to fire: ");
    office.fire(empID);
}

//================================================================================================================================
