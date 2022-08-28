// // ## Assignment

$(document).ready(onReady);

// A 'Submit' button should collect the form information, store the information 
function onReady() {
    $('#submit-button').on('click', addEmployees);
    $(document).on('click', '.deleteButton', deleteEmployee);
}

let totalMonthly = 0;
let listsOfEmployees = [];

function addEmployees () {
    // lists of the input employees information. 
    let employeeName = $('#firstNameInput').val();
    let employeeLast = $('#lastNameInput').val();
    let employeeID = $('#idInput').val();
    let employeeTitle = $('#titleInput').val();
    let employeeAnnualSalary = $('#annualSalaryInput').val();

    // add employees information into a objects for easier access. 
    let employeesInformation = {
        firstName: employeeName,
        lastName: employeeLast,
        id: Number(employeeID),
        title: employeeTitle,
        annualSalary: Number(employeeAnnualSalary)
    }
    
    //this will push the newly added object into an array. 
    listsOfEmployees.push(employeesInformation)
    console.log(listsOfEmployees);

    //this will add the output of employee info into a tableroll display on the DOM. 
    $('#tablebody').append(`
        <tr id="tableRollOutput">
            <td>${employeeName}</td>
            <td>${employeeLast}</td>
            <td>${employeeID}</td>
            <td>${employeeTitle}</td>
            <td>${employeeAnnualSalary}</td>
            <td>
                <button class='deleteButton'>Delete</button>
            </td>
        </tr>
    `);

    //this caculate the total of annual salary when employees info is added. 
    totalMonthly += employeesInformation.annualSalary
    $('#totalMonthly').empty();
    $('#totalMonthly').append(`<h4 id="totalMonthly">Total Monthly: $ ${Number(totalMonthly)}</h4>`);

    //this if-statement will change the background of totalmonthly when going over the budget. 
    if (totalMonthly > 20000) {
        $('#totalMonthly').css('background-color', 'red');
            alert('OHHHHH NO!!! YOU WENT OVER THE BUDGET!!!');
    }
    else {}

} //end of addEmployee-function. 
 
//this function will delete an employee on click button. 
function deleteEmployee () {
    $('#tableRollOutput').remove();
}