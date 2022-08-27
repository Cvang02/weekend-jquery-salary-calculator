// ## Assignment

// The application should have an input form that collects _employee first name, 
// last name, ID number, job title, annual salary_.

// A 'Submit' button should collect the form information, store the information 
// to calculate monthly costs, append information to the DOM and clear the input fields. 
// Using the stored information, calculate monthly costs and append this to the to DOM. 
// If the total monthly cost exceeds $20,000, add a red background color to the total 
// monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, 
// it does **not** need to remove that Employee's salary from the reported total.

$(document).ready(onReady);

function onReady() {
    $('#submit-button').on('click', renderEmployees);
    $('#submit-button').on('click', addEmployees);
}

//Create an array of Objects with employee's inforamtion.
let employeesInformation = [{
    firstName: 'Clark',
    lastName: 'J. Kent',
    id: 1111,
    title: 'Superman',
    annualSalary: 10000
},
{
    firstName: 'Bruce',
    lastName: 'Wayne',
    id: 2222,
    title: 'Batman',
    annualSalary: 30000
},
{
    firstName: 'Arthur',
    lastName: 'Curry',
    id: 3333,
    title: 'Aquaman',
    annualSalary: 20000
},
]; 

// This function is to add the already exsisting employee array. 
function renderEmployees () {
    $('#tablebody').empty();
    for (let employee of employeesInformation) {
        // console.log(employee); Test only to see the objects. 
        $('#tablebody').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
        </tr>
`)}


}; //end of addEmployee-function. 

// This function to to add any new employee information into the array. 
function addEmployees () {
    let employeeName = $('#firstNameInput').val();
    let employeeLast = $('#lastNameInput').val();
    let employeeID = $('#idInput').val();
    let employeeTitle = $('#titleInput').val();
    let employeeAnnualSalary = $('#annualSalaryInput').val();

    let newEmployees = {
        firstName: employeeName,
        lastName: employeeLast,
        id: Number(employeeID),
        title: employeeTitle,
        annualSalary: Number(employeeAnnualSalary)
    }

    employeesInformation.push(newEmployees);
    
    renderEmployees();
    


} //end of addEmployees-function. 

