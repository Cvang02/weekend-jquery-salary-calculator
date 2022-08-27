// // ## Assignment

$(document).ready(onReady);

// A 'Submit' button should collect the form information, store the information 
function onReady() {
    $('#submit-button').on('click', addEmployees);
}

let totalMonthly = 0;

function addEmployees () {
    // lists of the employees information. 
    let employeeName = $('#firstNameInput').val();
    let employeeLast = $('#lastNameInput').val();
    let employeeID = $('#idInput').val();
    let employeeTitle = $('#titleInput').val();
    let employeeAnnualSalary = $('#annualSalaryInput').val();

    // add employees information into a objects for easier access. 
    let newEmployees = {
        firstName: employeeName,
        lastName: employeeLast,
        id: Number(employeeID),
        title: employeeTitle,
        annualSalary: Number(employeeAnnualSalary)
    }
    console.log(newEmployees);

    $('#tablebody').append(`
        <tr>
            <td>${employeeName}</td>
            <td>${employeeLast}</td>
            <td>${employeeID}</td>
            <td>${employeeTitle}</td>
            <td>${employeeAnnualSalary}</td>
        </tr>
    `);

    //this caculate the total of annual salary when employees info is added. 
    totalMonthly += newEmployees.annualSalary
    $('#totalMonthly').empty();
    $('#totalMonthly').append(`<h4 id="totalMonthly">Total Monthly: $ ${Number(totalMonthly)}</h4>`);


} //end of addEmployee-function. 
 