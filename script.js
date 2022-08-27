// // ## Assignment

$(document).ready(onReady);

// A 'Submit' button should collect the form information, store the information 
function onReady() {
    $('#submit-button').on('click', addEmployees);
    $(document).on('click', '.deleteButton', deleteEmployee);
}


let totalMonthly = 0;
let numbersOfEmployees = [];

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
    
    numbersOfEmployees.push(newEmployees)
    console.log(numbersOfEmployees);

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
    totalMonthly += newEmployees.annualSalary
    $('#totalMonthly').empty();
    $('#totalMonthly').append(`<h4 id="totalMonthly">Total Monthly: $ ${Number(totalMonthly)}</h4>`);

} //end of addEmployee-function. 
 
function deleteEmployee () {
    $('#tableRollOutput').remove();
    // $('#totalMonthly').empty();
    // $('#totalMonthly').append(`<h4 id="totalMonthly">Total Monthly: $ ${Number(totalMonthly)}</h4>`);
}

// function total () {
//     if (totalMonthly > 20000) {
//         $('#totalMonthly').css('backtext-color', 'red');
//     }
//     else {}
// };


// Need to find a way to change background color when total month exceed 20,000.
// research if I am using .css correctly. Look at code to make sure it runs corrently and 
// the way it intends it to. 