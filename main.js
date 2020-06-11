console.log("Fetch is HERE !");
const listNames = document.getElementById("list-names");
// Check Status
function statusApproval(response){
    if(response.status === 200)
    return Promise.resolve(response); //If promise resolves, control goes to next then statement .
    else
    return Promise.reject(`Error : ${response.status}`); //If promise rejects, control goes directly to the catch statement.
}

// If everything goes fine, then parse the data !
function parsingData(response){
    return response.json();
}



function fetchData(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(statusApproval)
    .then(parsingData)
    .then(data=>{
        let output = "";
        data.forEach(element => {
            output += `<li>${element.name}</li>`
        });

        listNames.innerHTML = output;
    })
    .catch(err=>console.log(err));
}

// Function Calling !
fetchData();


// Wait if you are facing difficulty to understand above code, so simpler code is written as follows :


// function fetchData(){
//     return fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data=>{
//         console.log(data);
//         let output = "";
//         data.forEach(element => {
//             output += `<li>${element.name} - ${element.username}</li>`
//         });

//         listNames.innerHTML = output;
//     })
//     .catch(err=>console.log(err));
// }

// // Function Calling

// fetchData();