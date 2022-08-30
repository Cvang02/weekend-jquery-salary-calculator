# Project Name : jQuery Salary Calculator

## Description

1. Create an application where you have the ability to input an employees informtion containing 
the employee's first name, last name, id, title and annually salary on an input form. 
2. A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
3. The output of this is that when you input the employee's information on the DOM, it will 
create a table roll containing all the employees information. 
4. A 'Delete' button should also be generated when a new epmployee's information is added and when clicked on it, it will delete the row containg that employees inforamtion. 

What problem did you solve? 


How did you solve it?

1. I start the project by creating a html/script/css and jquery file and sourcing them all together. 
2. I then start on my html files by adding how I would want my DOM to look like first visually to see
how I would solve the probelm. I added inputs of each information input along with a button and table 
and assign some input with an id. 
3. After, I start working on the script files by creating a ready now document, making sure it works. 
I started out by creating an exsisting array of objects to see how each input will look like when added
to the DOM. I then created a function containing input values and assiging them to different name variables for better usage and then putting thoss variables into an object. I created a global empty array to push the new object containing the employees inforamtion to create a array of objects. Next, I appended a new table row so when I input any values on the DOM, it will display the inforamtion on the DOM in the table format. 
4. Next, I created a delete button to see how it will look like visually on the DOM. I then create a delete function to delete any employee table roll on the DOM when clicked. In order for it to work, I have to make sure that when each newly added table roll in created on the DOM, it must have a click to make sure the delete button is working. 
5. Last but not least, I created a function to caculate the total monthly when adding all the employees annualy salary by dividing it by 12. I then make sure that the calculating is working and appending the total onto the DOM. 
