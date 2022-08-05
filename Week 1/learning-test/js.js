// FormData v2
// function logSubmit(event) {
//   log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//   console.log(event.textContent);
//   event.preventDefault();
// }

// const form = document.getElementById('form');
// const log = document.getElementById('log');
// form.addEventListener('submit', logSubmit);

/* // FormData
// const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
// console.log(btn);

/* btn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event);
}) */

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // get name field
//   const form1 = new FormData(form);
//   console.log(form1);
// }) */

// Axios
// let resp;
// const myData = function(data) {
//     resp = data;
//     return resp;
// }
  
// axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
// .then(response => {
//   const data = response.data;
//   return data
//  })
// .then(myData)
// .catch(err => {
//   console.log('Error: ', err);
// })

// console.log(resp);


// Promise
/* const myPromise = new Promise((resolve, reject) => {
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10").then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    })
});


let res;

myPromise.then(data => {
    res = data;
}) */



// Global variable from try and catch block in a function
/* const try1 = {};
const tryme = () => {
    try {
        // const try1 = 0;
        try1.test = 0;
        // return try1;
        // return try1;
    } catch (error) {
        console.log("error");
    }
    // try1 = 0;
    // return try1;
}

function tryme2() {
    try1 = 1;
    return try1;
}

tryme();

console.log(try1); */