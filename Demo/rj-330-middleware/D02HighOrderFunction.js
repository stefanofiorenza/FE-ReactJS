
// See https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

//see examples from arrays:

/**
 *  Array high order functions:
 * 
    map (mappingFunction) = copy every element in array to new array using mappingFunction
    sort (compareFunction) = order array comparing elements using the compareFunction
    filter (filterFunction) = copy all elements from array into a new array keeping only those where filterFunction(elem) returns true
    reduce (reduceFunction, initialValue) = calculate a single value result using all elements in array applying reduceFunction
 * 
 */



let array=[1,2,3,4,5,6,7,8,9,10];

//1) map (function)
/*
    let mappedArray= array.map(  n => n+1);
    console.log(mappedArray);
*/
//2) filter (function)
/*
    let filteredArray= array.filter(  n => n%2==0); //keep only even numbers
    console.log(filteredArray);
*/

//3) find(function), findIndex(function)

    let foundElement= array.find(  n => n==8);
    console.log(foundElement);

    let foundElementIndex= array.findIndex(  n => n==8);
    console.log("Index: "+foundElementIndex);


/*
    let foundElementIndex= array.findIndex(  n => n==8);
    console.log(foundElementIndex);
*/


//4) reduce(function, initialValue) -> aggregatedValue
//let sumArrayNumbers = array.reduce((accumulator, element) => accumulator=accumulator+element);
//console.log(sumArrayNumbers);



//5) map, filter, reduce combined..

let employees = [
    {name:"Stefano", surname:"Fiorenza", salary:1000, company:"AB"},
    {name:"Leonardo", surname:"Da Vinci", salary:2000, company:"AB"},
    {name:"Guglielmo", surname:"Marconi", salary:1500, company:"CC"},
    {name:"Alessandro", surname:"Volta", salary:1300, company:"DD"},
    {name:"Walter", surname:"Benjamin", salary:1400, company:"DD"},
    {name:"Jan-Paul", surname:"Sartre", salary:1700, company:"BB"},
    {name:"Aldous", surname:"Huxley", salary:1200, company:"AA"},
    {name:"George", surname:"Orwell", salary:1100, company:"AB"},
]


//5.1) Sum all salaries from employees from AB company
    /*
        let initialSalaryValue = 0;
        let salariesFromAb = employees.filter(employee => employee.company==='AB').reduce((salaries, emp) =>{
            salaries+=emp.salary;
            return salaries;
        },initialSalaryValue);
        console.log(salariesFromAb);
    */

    /* Or more succint...
        let initialSalaryValue = 0;
        let salariesFromAb = employees.filter(employee => employee.company==='AB').reduce((salaries, emp) =>salaries+=emp.salary,initialSalaryValue);
        console.log(salariesFromAb);
    */

//5.2) Map into array of new objects {fullName, salary} all employees from AB
    
/*
    let nameAndSalaryFromAb=employees.filter(employee => employee.company==='AB')
                                        .map((employee) => {
                                            return {fullName: employee.name+" "+employee.surname,salary : employee.salary};
                                        });
    console.log(...nameAndSalaryFromAb);
 */   




